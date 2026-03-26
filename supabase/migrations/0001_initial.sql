-- Courses
create table courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  icon_url text,
  brand_color text not null default '#0ea5e9',
  price_cents int not null default 2900,
  enrolled_count int not null default 0,
  is_published bool not null default false,
  created_at timestamptz not null default now()
);

-- Questions
create table questions (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references courses(id) on delete cascade,
  body text not null,
  options jsonb not null, -- {"A":"...","B":"...","C":"...","D":"..."}
  correct text not null,  -- "A" | "B" | "C" | "D"
  explanation text not null default '',
  domain text not null default '',
  created_at timestamptz not null default now()
);

-- Exam sets
create table exam_sets (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references courses(id) on delete cascade,
  title text not null,
  question_ids uuid[] not null default '{}',
  duration_mins int not null default 90
);

-- Profiles (extends auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null default '',
  role text not null default 'user',
  created_at timestamptz not null default now()
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Purchases
create table purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  course_id uuid not null references courses(id) on delete cascade,
  plan text not null, -- 'starter'|'pro'|'platinum'|'all_access'
  stripe_session_id text not null default '',
  created_at timestamptz not null default now()
);

-- Exam attempts
create table exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  exam_set_id uuid not null references exam_sets(id) on delete cascade,
  answers jsonb not null default '{}', -- {question_id: "B"}
  score_pct numeric,
  passed bool,
  mode text not null default 'exam', -- 'exam'|'study'
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

-- RLS
alter table courses enable row level security;
alter table questions enable row level security;
alter table exam_sets enable row level security;
alter table profiles enable row level security;
alter table purchases enable row level security;
alter table exam_attempts enable row level security;

create policy "Public courses" on courses for select using (is_published = true);
create policy "Own profile" on profiles for all using (auth.uid() = id);
create policy "Own purchases" on purchases for select using (auth.uid() = user_id);
create policy "Own attempts" on exam_attempts for all using (auth.uid() = user_id);
create policy "Questions for purchased courses" on questions for select
  using (exists (
    select 1 from purchases where user_id = auth.uid() and course_id = questions.course_id
  ));
create policy "Exam sets for purchased courses" on exam_sets for select
  using (exists (
    select 1 from purchases where user_id = auth.uid() and course_id = exam_sets.course_id
  ));

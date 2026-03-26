-- Helper function to safely increment enrolled_count
create or replace function increment_enrolled_count(course_id_param uuid)
returns void language plpgsql security definer as $$
begin
  update courses set enrolled_count = enrolled_count + 1 where id = course_id_param;
end;
$$;

-- Allow admins to bypass RLS (run as service role)
create policy "Admin full access to courses" on courses for all
  using (true) with check (true);

create policy "Admin full access to questions" on questions for all
  using (true) with check (true);

create policy "Admin full access to exam_sets" on exam_sets for all
  using (true) with check (true);

create policy "Admin full access to purchases" on purchases for all
  using (true) with check (true);

create policy "Admin full access to profiles" on profiles for all
  using (true) with check (true);

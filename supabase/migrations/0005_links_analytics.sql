-- ── Links & Click Analytics ─────────────────────────────────────────────────

-- Short links table (code → destination mapping)
CREATE TABLE IF NOT EXISTS links (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT        UNIQUE NOT NULL,
  destination TEXT        NOT NULL,
  label       TEXT        NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Per-click event log — stores code directly, no FK needed
CREATE TABLE IF NOT EXISTS link_clicks (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  code       TEXT        NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_links_code            ON links(code);
CREATE INDEX IF NOT EXISTS idx_link_clicks_code      ON link_clicks(code);
CREATE INDEX IF NOT EXISTS idx_link_clicks_clicked_at ON link_clicks(clicked_at DESC);

-- Row-Level Security: only service_role (bypasses RLS) can access
ALTER TABLE links       ENABLE ROW LEVEL SECURITY;
ALTER TABLE link_clicks ENABLE ROW LEVEL SECURITY;

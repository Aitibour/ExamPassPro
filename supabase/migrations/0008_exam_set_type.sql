-- ── exam_sets: add type column ────────────────────────────────────────────────
-- Values: 'mock' (timed exam) | 'practice' (study mode with answers shown)
-- Default is 'mock' so existing sets are not broken before the UPDATE below.

ALTER TABLE exam_sets
  ADD COLUMN IF NOT EXISTS type TEXT NOT NULL DEFAULT 'mock';

-- Back-fill existing rows from title naming convention
UPDATE exam_sets SET type = 'practice' WHERE title ILIKE '%Practice%';
UPDATE exam_sets SET type = 'mock'     WHERE title ILIKE '%Mock%';

-- Confirm
DO $$
DECLARE
  v_mock     INT;
  v_practice INT;
BEGIN
  SELECT COUNT(*) INTO v_mock     FROM exam_sets WHERE type = 'mock';
  SELECT COUNT(*) INTO v_practice FROM exam_sets WHERE type = 'practice';
  RAISE NOTICE 'exam_sets type column added. mock=%, practice=%', v_mock, v_practice;
END $$;

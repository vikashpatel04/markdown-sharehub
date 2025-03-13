/*
  # Create shared_markdown table

  1. New Tables
    - `shared_markdown`
      - `id` (uuid, primary key)
      - `content` (text, stores the markdown content)
      - `expires_at` (timestamptz, when the share link expires)
      - `created_at` (timestamptz, when the share was created)

  2. Security
    - Enable RLS on `shared_markdown` table
    - Add policies for:
      - Anyone can read (select) shared content
      - Anyone can create (insert) new shares
*/

CREATE TABLE IF NOT EXISTS shared_markdown (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE shared_markdown ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read shared content
CREATE POLICY "Anyone can read shared content"
  ON shared_markdown
  FOR SELECT
  TO anon
  USING (expires_at > now());

-- Allow anyone to create new shares
CREATE POLICY "Anyone can create new shares"
  ON shared_markdown
  FOR INSERT
  TO anon
  WITH CHECK (true);
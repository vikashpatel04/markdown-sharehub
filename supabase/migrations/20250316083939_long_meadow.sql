/*
  # Add automated cleanup for expired shared markdown

  1. Changes
    - Enable pg_cron extension
    - Create a scheduled job to delete expired shared_markdown entries
    - The job runs every hour to clean up expired entries

  2. Security
    - No changes to existing policies
    - Cleanup happens at database level
*/

-- Enable the pg_cron extension
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create a scheduled job to delete expired entries
SELECT cron.schedule(
  'cleanup-expired-shares',  -- job name
  '0 * * * *',              -- run every hour (cron expression)
  $$
    DELETE FROM shared_markdown 
    WHERE expires_at < NOW();
  $$
);
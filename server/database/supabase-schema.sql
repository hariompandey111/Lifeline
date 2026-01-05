-- ===========================================
-- LTHS Contact Form Database Schema
-- Run this in your Supabase SQL Editor
-- ===========================================

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Optional: Add status tracking
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  notes TEXT
);

-- Create an index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from the service role
-- (The API uses service role key, so this is needed)
CREATE POLICY "Allow service role insert" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create a policy for reading (admin access via service role)
CREATE POLICY "Allow service role select" ON contact_submissions
  FOR SELECT
  USING (true);

-- ===========================================
-- OPTIONAL: Create a view for admin dashboard
-- ===========================================
CREATE OR REPLACE VIEW contact_submissions_summary AS
SELECT 
  COUNT(*) as total_submissions,
  COUNT(*) FILTER (WHERE status = 'new') as new_submissions,
  COUNT(*) FILTER (WHERE status = 'contacted') as contacted,
  COUNT(*) FILTER (WHERE status = 'closed') as closed,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') as last_7_days,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') as last_30_days
FROM contact_submissions;


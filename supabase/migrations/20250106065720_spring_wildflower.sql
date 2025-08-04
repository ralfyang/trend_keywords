/*
  # Initial Schema Setup for Travel Service

  1. New Tables
    - users
      - Stores user profiles and authentication data
    - destinations
      - Stores travel destinations with details
    - itineraries
      - Stores travel plans and routes
    - votes
      - Stores user votes on destinations and itineraries
    - guides
      - Stores guide profiles and availability
    - reviews
      - Stores user reviews and ratings

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  display_name text,
  avatar_url text,
  reputation integer DEFAULT 0,
  is_guide boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  location text NOT NULL,
  image_url text,
  rating numeric(3,2) DEFAULT 0,
  votes_count integer DEFAULT 0,
  added_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Itineraries table
CREATE TABLE IF NOT EXISTS itineraries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  duration integer NOT NULL,
  difficulty text CHECK (difficulty IN ('easy', 'moderate', 'challenging')),
  estimated_cost numeric(10,2),
  rating numeric(3,2) DEFAULT 0,
  votes_count integer DEFAULT 0,
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Votes table
CREATE TABLE IF NOT EXISTS votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  target_type text CHECK (target_type IN ('destination', 'itinerary')),
  target_id uuid NOT NULL,
  value integer CHECK (value IN (-1, 1)),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, target_type, target_id)
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  target_type text CHECK (target_type IN ('destination', 'itinerary', 'guide')),
  target_id uuid NOT NULL,
  rating integer CHECK (rating BETWEEN 1 AND 5),
  content text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE itineraries ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read all users"
  ON users FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can read destinations"
  ON destinations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create destinations"
  ON destinations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = added_by);

CREATE POLICY "Anyone can read itineraries"
  ON itineraries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create itineraries"
  ON itineraries FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can vote once"
  ON votes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read all reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
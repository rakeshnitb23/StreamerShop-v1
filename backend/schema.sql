-- Database schema for Streamer Shop platform
-- Run this script on your Neon PostgreSQL database

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) NOT NULL CHECK (role IN ('seller', 'buyer')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create streams table
CREATE TABLE IF NOT EXISTS streams (
    id SERIAL PRIMARY KEY,
    seller_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    youtube_url VARCHAR(500) NOT NULL,
    title VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create polls table
CREATE TABLE IF NOT EXISTS polls (
    id SERIAL PRIMARY KEY,
    stream_id INTEGER NOT NULL REFERENCES streams(id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    actual_price DECIMAL(10,2) NOT NULL,
    max_discount INTEGER NOT NULL CHECK (max_discount >= 0 AND max_discount <= 100),
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    ends_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create guesses table
CREATE TABLE IF NOT EXISTS guesses (
    id SERIAL PRIMARY KEY,
    poll_id INTEGER NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
    buyer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    guessed_price DECIMAL(10,2) NOT NULL,
    discount_won INTEGER DEFAULT NULL,
    discount_code VARCHAR(50) DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    -- Ensure one guess per buyer per poll
    UNIQUE(poll_id, buyer_id)
);

-- Create indexes for better performance

-- Users table indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Streams table indexes
CREATE INDEX IF NOT EXISTS idx_streams_seller_id ON streams(seller_id);
CREATE INDEX IF NOT EXISTS idx_streams_is_active ON streams(is_active);
CREATE INDEX IF NOT EXISTS idx_streams_created_at ON streams(created_at);

-- Polls table indexes
CREATE INDEX IF NOT EXISTS idx_polls_stream_id ON polls(stream_id);
CREATE INDEX IF NOT EXISTS idx_polls_is_active ON polls(is_active);
CREATE INDEX IF NOT EXISTS idx_polls_ends_at ON polls(ends_at);
CREATE INDEX IF NOT EXISTS idx_polls_created_at ON polls(created_at);

-- Guesses table indexes
CREATE INDEX IF NOT EXISTS idx_guesses_poll_id ON guesses(poll_id);
CREATE INDEX IF NOT EXISTS idx_guesses_buyer_id ON guesses(buyer_id);
CREATE INDEX IF NOT EXISTS idx_guesses_created_at ON guesses(created_at);
CREATE INDEX IF NOT EXISTS idx_guesses_discount_won ON guesses(discount_won);

-- Create composite indexes for common queries
CREATE INDEX IF NOT EXISTS idx_streams_seller_active ON streams(seller_id, is_active);
CREATE INDEX IF NOT EXISTS idx_polls_stream_active ON polls(stream_id, is_active);
CREATE INDEX IF NOT EXISTS idx_guesses_poll_buyer ON guesses(poll_id, buyer_id);

-- Add comments to tables
COMMENT ON TABLE users IS 'Platform users (sellers and buyers)';
COMMENT ON TABLE streams IS 'YouTube streaming sessions by sellers';
COMMENT ON TABLE polls IS 'Price guessing polls within streams';
COMMENT ON TABLE guesses IS 'User guesses for poll products';

-- Add comments to key columns
COMMENT ON COLUMN users.role IS 'User role: seller or buyer';
COMMENT ON COLUMN streams.youtube_url IS 'YouTube stream URL or video ID';
COMMENT ON COLUMN polls.actual_price IS 'Actual product price in dollars';
COMMENT ON COLUMN polls.max_discount IS 'Maximum discount percentage (0-100)';
COMMENT ON COLUMN polls.duration_minutes IS 'How long the poll runs in minutes';
COMMENT ON COLUMN guesses.discount_won IS 'Discount percentage won (0-max_discount)';
COMMENT ON COLUMN guesses.discount_code IS 'Unique discount code generated for winner';
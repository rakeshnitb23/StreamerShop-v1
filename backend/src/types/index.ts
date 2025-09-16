export interface User {
  id: number;
  email: string;
  password: string;
  role: 'seller' | 'buyer';
  created_at: Date;
}

export interface Stream {
  id: number;
  seller_id: number;
  youtube_url: string;
  title: string;
  is_active: boolean;
  created_at: Date;
}

export interface Poll {
  id: number;
  stream_id: number;
  product_name: string;
  actual_price: number;
  max_discount: number;
  duration_minutes: number;
  ends_at: Date;
  is_active: boolean;
  created_at: Date;
}

export interface Guess {
  id: number;
  poll_id: number;
  buyer_id: number;
  guessed_price: number;
  discount_won: number | null;
  discount_code: string | null;
  created_at: Date;
}

export interface JWTPayload {
  userId: number;
  email: string;
  role: 'seller' | 'buyer';
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
export interface User {
  id: number;
  email: string;
  role: 'seller' | 'buyer';
  created_at: string;
}

export interface Stream {
  id: number;
  seller_id: number;
  youtube_url: string;
  title: string;
  is_active: boolean;
  created_at: string;
}

export interface Poll {
  id: number;
  stream_id: number;
  product_name: string;
  actual_price: number;
  max_discount: number;
  duration_minutes: number;
  ends_at: string;
  is_active: boolean;
  created_at: string;
}

export interface Guess {
  id: number;
  poll_id: number;
  buyer_id: number;
  guessed_price: number;
  discount_won: number | null;
  discount_code: string | null;
  created_at: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}
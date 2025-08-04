import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// 연결 테스트
supabase.from('users').select('*').limit(1)
  .then(({ data, error }) => {
    if (error) {
      console.error('Supabase 연결 오류:', error);
    } else {
      console.log('Supabase 연결 성공!');
    }
  });
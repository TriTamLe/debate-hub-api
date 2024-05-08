import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly supabaseClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );

  async signIn(email: string, password: string) {
    const { data: user, error } =
      await this.supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
    return { user, error };
  }

  async signUp(email: string, password: string) {
    const { data: user, error } = await this.supabaseClient.auth.signUp({
      email,
      password,
    });
    console.log(user, error);
    return { user, error };
  }
}

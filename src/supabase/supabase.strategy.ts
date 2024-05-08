import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SupabaseService } from './supabase.service';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly supabaseService: SupabaseService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const { user, error } = await this.supabaseService.signIn(email, password);
    if (error) {
      throw error;
    }
    return user;
  }
}

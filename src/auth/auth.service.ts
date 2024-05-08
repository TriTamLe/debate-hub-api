import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signIn(dto: AuthDto) {
    const { email, password } = dto;
    return this.supabaseService.signIn(email, password);
  }

  async signUp(dto: AuthDto) {
    const { email, password } = dto;
    return this.supabaseService.signUp(email, password);
  }
}

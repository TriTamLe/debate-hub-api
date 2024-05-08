import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SupabaseModule, AuthenticationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

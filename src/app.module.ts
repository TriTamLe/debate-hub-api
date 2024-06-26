import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    SupabaseModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

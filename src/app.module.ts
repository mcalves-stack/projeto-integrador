import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './Env';
import { UserModule } from './user/user.module';
import { FamilyModule } from './family/family.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }), 
    AuthModule, 
    PrismaModule, 
    UserModule, FamilyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

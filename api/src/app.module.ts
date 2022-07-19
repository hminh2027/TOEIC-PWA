import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { PostsModule } from 'src/modules/posts/posts.module';
import config from 'src/common/configs/config';
import { loggingMiddleware } from 'src/common/middleware/logging.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()], // configure your prisma middleware
      },
    }),
    AuthModule,
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {
  static port: string | number;
  static isDev: boolean;

  constructor(config: ConfigService) {
    AppModule.port = config.get('PORT');
    AppModule.isDev = config.get('NODE_ENV');
  }
}

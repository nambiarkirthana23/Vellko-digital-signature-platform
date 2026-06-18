
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from './auth/module/auth.module';
import { UsersModule } from './users/module/user.module';
import { User } from './users/entity/user.entity';
import { DocumentModule } from './Document/module/document.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
    UsersModule,
    DocumentModule,

    // ✅ Use ConfigService for DB settings
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
      port: parseInt(config.get<string>('DB_PORT') || '5432', 10),

        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [User],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
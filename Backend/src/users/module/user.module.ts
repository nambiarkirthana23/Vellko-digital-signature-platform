import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../entity/user.entity';
import { UsersService } from '../service/user.service';
import { UsersController } from '../controller/user.controller';


@Module({
  imports:[TypeOrmModule.forFeature([User]),

JwtModule.register({
      secret: 'secret', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UsersService],
  controllers:[UsersController],
  exports:[UsersService],
})
export class UsersModule {}
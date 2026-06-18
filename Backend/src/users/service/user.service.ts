import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { User } from '../entity/user.entity';
import { SignupDto } from '../dto/signup.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

//   async createUser(dto: SignupDto) {
//     const hashedPassword = await bcrypt.hash(dto.password, 10);

//     const user = this.userRepo.create({
//       fullName: dto.fullName,
//       email: dto.email,
//       password: hashedPassword,
//     });

//     return this.userRepo.save(user);
//   }

async createUser(dto: SignupDto) {
  const existing = await this.findByEmail(dto.email);

  if (existing) {
    throw new HttpException('Email already exists', HttpStatus.CONFLICT);
  }

  const hashedPassword = await bcrypt.hash(dto.password, 10);

  const user = this.userRepo.create({
    fullName: dto.fullName,
    email: dto.email,
    password: hashedPassword,
  });

  return this.userRepo.save(user);
}
  async findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async findById(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }
}
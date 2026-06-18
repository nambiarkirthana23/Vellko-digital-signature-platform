import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { SignupDto } from '../dto/signup.dto';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  /**
 * Registers a new user account.
 * Validates user details and stores the user in the database.
 */
  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return this.usersService.createUser(dto);
  }
}
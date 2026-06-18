import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty({ message: 'Full name is required' })
  @MinLength(3, { message: 'Full name must be at least 3 characters' })
  @MaxLength(20, { message: 'Full name cannot exceed 20 characters' })
  fullName: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @Matches(
    /^(?=.*[A-Za-z])(?=.*\d).+$/,
    {
      message:
        'Password must contain at least one letter and one number',
    },
  )
  password: string;
}
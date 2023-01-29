import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/user-decorator';
import { AuthUser } from 'src/entities/AuthUser.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('me')
  @UseGuards(JwtAuthGuard)
  hello(@User() user: AuthUser) {
    return user
  }

  @Mutation('signIn')
  signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.signIn(signInInput)
  }

  @Mutation('signUp')
  signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput)
  }
}

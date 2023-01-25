import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('hello')
  hello() {
    return "HELLO WORLD"
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

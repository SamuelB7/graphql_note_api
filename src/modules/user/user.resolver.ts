import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { User } from 'src/decorators/user-decorator';
import { AuthUser } from 'src/entities/AuthUser.entity';

@UseGuards(JwtAuthGuard)
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /* @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  } */

  /* @Query('user')
  findAll() {
    return this.userService.findAll();
  } */

  /* @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  } */

  /* @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  } */

  @Mutation('publicUpdateUser')
  publicUpdate(@Args('updateUserInput') updateUserInput: UpdateUserInput, @User() user: AuthUser) {
    return this.userService.publicUpdate(user.id, updateUserInput);
  }

 /*  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  } */
}

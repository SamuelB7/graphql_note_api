import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService
  ) {}
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async publicUpdate(userId: string, updateUserInput: UpdateUserInput){

    if(updateUserInput.password){
      let hash = await bcrypt.hash(updateUserInput.password, 10)
      updateUserInput.password = hash
    }

    try {
      const user = await this.prismaService.user.update({
        where: {
          id: userId
        },
        data: {
          ...updateUserInput
        }
      })

      return user
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}

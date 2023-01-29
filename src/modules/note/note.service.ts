import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';

@Injectable()
export class NoteService {
  constructor(
    private prismaService: PrismaService
  ) {}

  async create(createNoteInput: CreateNoteInput) {
    try {
      const note = await this.prismaService.note.create({
        data: {
          ...createNoteInput
        }
      })

      return note
    } catch (error) {
      console.log(error.message)
      return error
    }
  }

  /* findAll() {
    return `This action returns all note`;
  } */

  async findAllByUser(userId) {
    const notes = await this.prismaService.note.findMany({
      where: {
        user_id: userId
      }
    })
    return notes;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteInput: UpdateNoteInput) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}

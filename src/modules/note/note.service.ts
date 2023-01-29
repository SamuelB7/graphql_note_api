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

  async findAllByUser(userId: string) {
    try {
      const notes = await this.prismaService.note.findMany({
        where: {
          user_id: userId
        }
      })
      return notes;
    } catch (error) {
      console.log(error)
      return error.message
    }
  }

  async findOne(noteId: string) {
    try {
      const note = await this.prismaService.note.findUnique({
        where: {
          id: noteId
        }
      })
      return note
    } catch (error) {
      console.log(error)
      return error.message
    }
  }

  async update(id: string, updateNoteInput: UpdateNoteInput) {
    try {
      const note = await this.prismaService.note.update({
        where: {
          id: id
        },
        data: {
          ...updateNoteInput,
          updated_at: new Date()
        }
      })

      return note
    } catch (error) {
      console.log(error)
      return error.message
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.note.delete({
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}

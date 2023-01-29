import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { User } from 'src/decorators/user-decorator';
import { AuthUser } from 'src/entities/AuthUser.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Resolver('Note')
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation('createNote')
  create(@Args('createNoteInput') createNoteInput: CreateNoteInput, @User() user: AuthUser) {
    createNoteInput.user_id = user.id
    return this.noteService.create(createNoteInput);
  }

 /*  @Query('notes')
  findAll() {
    return this.noteService.findAll();
  } */

  @Query('notesByUser')
  findAllByUser(@User() user: AuthUser) {
    return this.noteService.findAllByUser(user.id);
  }

  @Query('note')
  findOne(@Args('id') id: string) {
    return this.noteService.findOne(id);
  }

  @Mutation('updateNote')
  update(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.noteService.update(updateNoteInput.id, updateNoteInput);
  }

  @Mutation('removeNote')
  remove(@Args('id') id: string) {
    return this.noteService.remove(id);
  }
}

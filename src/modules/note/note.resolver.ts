import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NoteService } from './note.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';

@Resolver('Note')
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation('createNote')
  create(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput);
  }

  @Query('note')
  findAll() {
    return this.noteService.findAll();
  }

  @Query('note')
  findOne(@Args('id') id: number) {
    return this.noteService.findOne(id);
  }

  @Mutation('updateNote')
  update(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.noteService.update(updateNoteInput.id, updateNoteInput);
  }

  @Mutation('removeNote')
  remove(@Args('id') id: number) {
    return this.noteService.remove(id);
  }
}

import { CreateNoteInput } from './create-note.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateNoteInput extends PartialType(CreateNoteInput) {
  
  @IsNotEmpty()
  @IsString()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string
}

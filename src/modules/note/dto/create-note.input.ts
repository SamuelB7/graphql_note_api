import { HideField } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateNoteInput {
    
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    content: string

    @HideField()
    user_id: string
}

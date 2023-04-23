import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserInput {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}

import { IsNotEmpty, IsString } from "class-validator"

export class SignInInput {
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
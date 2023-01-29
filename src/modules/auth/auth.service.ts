import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwt: JwtService
    ) { }

    async signIn(signInInput: SignInInput) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    email: signInInput.email
                }
            })
    
            if (!user) {
                throw new BadRequestException("User not found", { cause: new Error() })
            }
    
            const correctPassword = await bcrypt.compare(signInInput.password, user.password)
    
            if (!correctPassword) {
                throw new BadRequestException("Incorrect email or password", { cause: new Error() })
            }
    
            const expiresIn = process.env.JWT_EXPIRES_IN || '24h';
    
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }
    
            return {
                accessToken: this.jwt.sign(payload, { expiresIn, secret: process.env.JWT_SECRET })
            }
        } catch (error) {
            return error
        }
    }

    async signUp(signUpInput: SignUpInput) {
        try {
            let hash = await bcrypt.hash(signUpInput.password, 10)

            const user = await this.prismaService.user.create({
                data: {
                    ...signUpInput,
                    password: hash
                }
            })

            const expiresIn = process.env.JWT_EXPIRES_IN || '24h';

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            return {
                accessToken: this.jwt.sign(payload, { expiresIn, secret: process.env.JWT_SECRET })
            }
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new BadRequestException("Email already in use", { cause: new Error() })
                }
            }

            return new Error("Error, try again later")
        }
    }
}

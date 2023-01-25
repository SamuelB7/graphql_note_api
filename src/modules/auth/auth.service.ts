import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInInput } from './dto/signin.input';
import { SignUpInput } from './dto/signup.input';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (
        private prsimaService: PrismaService,
        private jwt: JwtService
    ) {}

    async signIn(signInInput: SignInInput) {
        console.log(signInInput)
        const user = await this.prsimaService.user.findUnique({
            where: {
                email: signInInput.email
            }
        })

        if(!user) {
            throw new Error("User not found")
        }

        const correctPassword = await bcrypt.compare(signInInput.password, user.password)

        if(!correctPassword) {
            return new Error("Email or password incorrect")
        }

        const expiresIn = process.env.JWT_EXPIRES_IN || '24h';

        const payload = {
            id: user.id,
            email: user.email
        }

        return {
            accessToken: this.jwt.sign(payload, { expiresIn, secret: process.env.JWT_SECRET })
        }
    }

    async signUp(signUpInput: SignUpInput) {
        let hash = await bcrypt.hash(signUpInput.password, 10)

        const user = await this.prsimaService.user.create({
            data: {
                ...signUpInput,
                password: hash
            }
        })

        const expiresIn = process.env.JWT_EXPIRES_IN || '24h';

        const payload = {
            id: user.id,
            email: user.email
        }

        return {
            accessToken: this.jwt.sign(payload, { expiresIn, secret:  process.env.JWT_SECRET})
        }
    }
}

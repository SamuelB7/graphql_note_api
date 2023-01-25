
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SignInInput {
    email: string;
    password: string;
}

export class SignUpInput {
    name: string;
    email: string;
    password: string;
}

export class AuthAccess {
    accessToken: string;
}

export abstract class IMutation {
    abstract signIn(signInInput: SignInInput): AuthAccess | Promise<AuthAccess>;

    abstract signUp(signUpInput: SignUpInput): AuthAccess | Promise<AuthAccess>;
}

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;

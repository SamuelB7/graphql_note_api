
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

export class CreateNoteInput {
    title: string;
    content: string;
}

export class UpdateNoteInput {
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class AuthAccess {
    accessToken: string;
}

export class AuthUser {
    id: string;
    name: string;
    email: string;
}

export abstract class IMutation {
    abstract signIn(signInInput: SignInInput): AuthAccess | Promise<AuthAccess>;

    abstract signUp(signUpInput: SignUpInput): AuthAccess | Promise<AuthAccess>;

    abstract createNote(createNoteInput: CreateNoteInput): Note | Promise<Note>;

    abstract updateNote(updateNoteInput: UpdateNoteInput): Note | Promise<Note>;

    abstract removeNote(id: string): Nullable<Note> | Promise<Nullable<Note>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract publicUpdateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract me(): Nullable<AuthUser> | Promise<Nullable<AuthUser>>;

    abstract notesByUser(): Nullable<Note>[] | Promise<Nullable<Note>[]>;

    abstract note(id: string): Nullable<Note> | Promise<Nullable<Note>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Note {
    id: string;
    title: string;
    content: string;
    user_id: string;
    created_at: DateTime;
    updated_at?: Nullable<DateTime>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: DateTime;
    updated_at?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;

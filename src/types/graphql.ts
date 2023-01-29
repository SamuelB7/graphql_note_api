
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
    user_id: string;
}

export class UpdateNoteInput {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
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

    abstract removeNote(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export abstract class IQuery {
    abstract me(): Nullable<AuthUser> | Promise<Nullable<AuthUser>>;

    abstract notes(): Nullable<Note>[] | Promise<Nullable<Note>[]>;

    abstract note(id: number): Nullable<Note> | Promise<Nullable<Note>>;
}

export class Note {
    id: number;
    title: string;
    content: string;
    user_id: string;
    created_at: DateTime;
    updated_at?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;

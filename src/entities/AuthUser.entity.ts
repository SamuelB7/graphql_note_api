import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthUser {

    @Field()
    id: string

    @Field()
    name: string

    @Field()
    email: string
}
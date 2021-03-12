import { Field, InputType, Int } from "type-graphql"

@InputType()
class UserInput {
    @Field()
    firstname: string

    @Field()
    lastname: string

    @Field(() => Int, { nullable: true })
    age: number
}
@InputType()
class UserUpdateInput {
    @Field(() => String, { nullable: true })
    firstname?: string

    @Field(() => String, { nullable: true })
    lastname?: string

    @Field(() => Int, { nullable: true })
    age?: number
}
export { UserInput, UserUpdateInput }

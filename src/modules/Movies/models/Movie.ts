import { Field, InputType, Int } from "type-graphql"

@InputType()
class MovieInput {
    @Field()
    title: string

    @Field(() => Int)
    minutes: number
}
@InputType()
class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => Int, { nullable: true })
    minutes?: number
}
export { MovieInput, MovieUpdateInput }

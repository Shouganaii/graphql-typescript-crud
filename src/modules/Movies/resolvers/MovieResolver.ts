import { Movie } from "../../../entity/Movie";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { MovieInput, MovieUpdateInput } from "../models/Movie";


@Resolver()
export class MovieResolver {
    @Mutation(() => Movie)
    async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
        const movie = await Movie.create(options).save();
        return movie;
    }

    @Mutation(() => Boolean)
    async updateMovie(
        @Arg('id') id: number,
        @Arg('input', () => MovieUpdateInput) input: MovieUpdateInput,
    ) {
        await Movie.update({ id }, input);
        return true
    }

    @Mutation(() => Boolean)
    async deleteMovie(@Arg('id') id: number) {
        await Movie.delete({ id })
        return true;
    }

    @Query(() => [Movie])
    movies() {
        return Movie.find();
    }

}
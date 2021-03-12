import { User } from "../../../entity/User";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {

    @Query(() => [User])
    users() {
        return User.find();
    }
}
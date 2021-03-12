import { isAuth } from "../isAuth";
import { MyContext } from "src/MyContext";
import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  //@UseMiddleware(isAuth)
  hello() {
    return "hi!";
  }
  @Query(() => String)
  @UseMiddleware(isAuth)
  async Me(@Ctx() { payload }: MyContext) {
    return `Your user id : ${payload!.userId}`;
  }
}

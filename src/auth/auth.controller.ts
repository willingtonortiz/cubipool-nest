import { Controller, Get } from "@nestjs/common";
import { UserTypeOrm } from "src/entities/typeorm";
import { LoginUserStory } from "./login.user-story";

@Controller("auth")
export class AuthController {
  constructor(private loginUserStory: LoginUserStory) {}

  @Get()
  testHello(): string {
    return "Hello World!";
  }

  @Get("test-users")
  testGetUsers(): Promise<UserTypeOrm[]> {
    return this.loginUserStory.query();
  }
}

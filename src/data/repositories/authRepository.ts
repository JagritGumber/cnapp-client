import { User } from "@/domain/entities";
import { IAuthRepository } from "@/domain/repositories";
import { ServerError } from "@/types";
import { type IUserLocalApi } from "../api";
import { inject, injectable } from "inversify";

@injectable()
class AuthRepository implements IAuthRepository {
  constructor(@inject("IUserLocalApi") private userLocalApi: IUserLocalApi) {}

  async loginUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | ServerError> {
    const user = await this.userLocalApi.getUserByEmailandPassword(
      email,
      password
    );
    return user;
  }
}

export { AuthRepository };

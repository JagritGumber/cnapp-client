import { User } from "@/domain/entities";
import { IAuthRepository } from "@/domain/repositories";
import { ServerError } from "@/types";
import { type IUserLocalApi } from "../api";

class AuthRepository implements IAuthRepository {
  private userLocalApi: IUserLocalApi;

  constructor(userLocalApi: IUserLocalApi) {
    this.userLocalApi = userLocalApi;
  }

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

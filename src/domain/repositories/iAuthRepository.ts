import { ServerError } from "@/types";
import { User } from "../entities";

interface IAuthRepository {
  loginUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | ServerError>;
}

export type { IAuthRepository };

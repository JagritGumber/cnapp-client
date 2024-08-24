import { IUseCase, ServerError } from "@/types";
import { User } from "../entities";
import { IAuthRepository } from "../repositories";
import { inject, injectable } from "inversify";
import { container } from "@/inversify.config";

interface LoginUserUseCaseParams {
  email: string;
  password: string;
}

@injectable()
class LoginUserUseCase implements IUseCase<User, LoginUserUseCaseParams> {
  constructor(
    @inject("IAuthRepository") private authRepository: IAuthRepository
  ) {
    this.authRepository = authRepository;
  }

  async execute({
    email,
    password,
  }: LoginUserUseCaseParams): Promise<User | ServerError> {
    const userOrError = await this.authRepository.loginUserWithEmailAndPassword(
      email,
      password
    );
    return userOrError;
  }
}

function loginUserUseCase({ email, password }: LoginUserUseCaseParams) {
  return new LoginUserUseCase(container.get("IAuthRepository")).execute({
    email,
    password,
  });
}

export { loginUserUseCase, LoginUserUseCase, type LoginUserUseCaseParams };

import { IUseCase, ServerError } from "@/types";
import { User } from "../entities";
import { IAuthRepository } from "../repositories";

interface LoginUserUseCaseParams {
  email: string;
  password: string;
}

class LoginUserUseCase implements IUseCase<User, LoginUserUseCaseParams> {
  private authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
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

function loginUserUseCase({
  email,
  password,
  authRepository,
}: LoginUserUseCaseParams & {
  authRepository: IAuthRepository;
}) {
  return new LoginUserUseCase(authRepository).execute({ email, password });
}

export { loginUserUseCase, type LoginUserUseCaseParams };

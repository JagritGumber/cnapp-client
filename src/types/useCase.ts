import { ServerError } from ".";

interface IUseCase<T, TParams> {
  execute(params: TParams): Promise<T | ServerError>;
}

export default IUseCase;

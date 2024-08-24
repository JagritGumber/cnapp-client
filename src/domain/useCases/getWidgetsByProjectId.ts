import { IUseCase, Widget } from "@/types";
import { inject, injectable } from "inversify";
import { IWidgetRepository } from "../repositories";
import { container } from "@/inversify.config";

interface GetWidgetsByProjectIdUseCaseParams {
  projectId: string;
}

@injectable()
class GetWidgetsByProjectIdUseCase
  implements IUseCase<Widget[], GetWidgetsByProjectIdUseCaseParams>
{
  constructor(
    @inject("IWidgetRepository") private widgetRepository: IWidgetRepository
  ) {}

  execute = async ({ projectId }: GetWidgetsByProjectIdUseCaseParams) => {
    return await this.widgetRepository.getWidgetsByProjectId(projectId);
  };
}

const getWidgetsByProjectIdUseCase = ({
  projectId,
}: GetWidgetsByProjectIdUseCaseParams) => {
  return new GetWidgetsByProjectIdUseCase(
    container.get<IWidgetRepository>("IWidgetRepository")
  ).execute({ projectId });
};

export {
  getWidgetsByProjectIdUseCase,
  GetWidgetsByProjectIdUseCase,
  type GetWidgetsByProjectIdUseCaseParams,
};

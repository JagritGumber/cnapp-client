import { Container } from "inversify";
import "reflect-metadata";
import {
  CategoryLocalApi,
  ICategoryLocalApi,
  IProjectLocalApi,
  IUserLocalApi,
  ProjectLocalApi,
  UserLocalApi,
} from "./data/api";
import {
  IAuthRepository,
  ICategoryRepository,
  IProjectRepository,
  IWidgetRepository,
} from "./domain/repositories";
import {
  AuthRepository,
  CategoryRepository,
  ProjectRepository,
  WidgetRepository,
} from "./data/repositories";
import { IWidgetLocalApi, WidgetLocalApi } from "./data/api/widgetsApi";

const container = new Container({ defaultScope: "Singleton" });

container.bind<IUserLocalApi>("IUserLocalApi").to(UserLocalApi);
container.bind<IAuthRepository>("IAuthRepository").to(AuthRepository);

container.bind<IProjectLocalApi>("IProjectLocalApi").to(ProjectLocalApi);
container.bind<IProjectRepository>("IProjectRepository").to(ProjectRepository);

container.bind<ICategoryLocalApi>("ICategoryLocalApi").to(CategoryLocalApi);
container
  .bind<ICategoryRepository>("ICategoryRepository")
  .to(CategoryRepository);

container.bind<IWidgetLocalApi>("IWidgetLocalApi").to(WidgetLocalApi);
container.bind<IWidgetRepository>("IWidgetRepository").to(WidgetRepository);

export { container };

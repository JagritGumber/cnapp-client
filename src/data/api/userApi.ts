// This file is just a placeholder for the user API.
// Real logic of api hasn't been implemented as we weren't bringing data
// From a remote Datasource, This is the implementation of retrieving
// data from our local datasource

import { User } from "@/domain/entities";
import users from "../mock/users.json";
import { ServerError } from "@/types";

interface IUserLocalApi {
  getUserByEmailandPassword: (
    email: string,
    password: string
  ) => Promise<User | ServerError>;
}

class UserLocalApi implements IUserLocalApi {
  private users: User[];
  constructor() {
    this.users = UserLocalApi.loadUsers();
  }

  static loadUsers = () => {
    const userData = users;
    return userData;
  };

  getUserByEmailandPassword = async (
    email: string,
    password: string
  ): Promise<User | ServerError> => {
    const user = this.users.filter(
      (user) => user.email === email && user.password === password
    )[0];

    if (user == undefined) {
      return { message: "User not found", status: 404 } as ServerError;
    }

    return user as User;
  };
}

export { UserLocalApi, type IUserLocalApi };

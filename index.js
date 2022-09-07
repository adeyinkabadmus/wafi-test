import * as UserService from "./services/user.js";
import * as AccountService from "./services/account.js";

const addUser = (name, amount) => {
  const user = UserService.createOne(name);
  AccountService.createOne(user.id, amount);
};



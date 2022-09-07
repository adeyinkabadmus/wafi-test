import * as UserService from "./services/user.js";
import * as AccountService from "./services/account.js";

const addUser = (name, amount = 0) => {
  const user = UserService.createOne(name);
  const balance = AccountService.createOne(user.id, amount);
  return {
    ...user,
    balance
  };
};

// const transferFund = (userId, amount) => {
//   return AccountService.de(user.id, amount);
// };


console.log(addUser("user a", 10));

console.log(addUser("user a", 25));

AccountService.transfer(1, 2, 10);

console.log("All users ", UserService.findAll());

console.log("User 1 ", AccountService.findOne(1));

console.log("User 2 ", AccountService.findOne(2));


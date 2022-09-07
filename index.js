import * as UserService from "./services/user.js";
import * as AccountService from "./services/account.js";

// Example Run through of the app:
// User A is added to the app
// User A deposits 10 dollars
// User B is added to the app
// User B deposits 20 dollars
// User B sends 15 dollars to User A
// User A checks their balance and has 25 dollars
// User B checks their balance and has 5 dollars
// User A transfers 25 dollars from their account
// User A checks their balance and has 0 dollars

// User A is added to the app
// User A deposits 10 dollars
const user1 = UserService.createProfile("user a", 10);
console.log("USER A ", user1);

// User B is added to the app
// User B deposits 20 dollars
const user2 = UserService.createProfile("user b");
AccountService.credit(user2.id, 20);
console.log("USER B ", user2);

// User B sends 15 dollars to User A
const transfer1 = AccountService.transfer(user2.id, user1.id, 15);

// User A checks their balance and has 25 dollars
const user1Balance1 = AccountService.findOne(user1.id);
console.log("USER A'S BALANCE ", user1Balance1);

// User B checks their balance and has 5 dollars
const user2Balance1 = AccountService.findOne(user2.id);
console.log("USER B'S BALANCE ", user2Balance1);

// User A transfers 25 dollars from their account
const transfer2 = AccountService.transfer(user1.id, user2.id, 25);

// User A checks their balance and has 0 dollars
const user1Balance2 = AccountService.findOne(user1.id);
console.log("USER A'S BALANCE ", user1Balance2);


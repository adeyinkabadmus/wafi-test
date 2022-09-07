import { describe, expect, test } from "@jest/globals";
import { createOne, transfer, credit, debit, findOne } from "../services/account.js";

describe("Account management", () => {

  it("creates a single account", () => {
    const user1 = 1;
    const account1 = createOne(user1);
    expect(account1.balance).toBe(0);
    
    const user2 = 2;
    const account2 = createOne(user2, 20);
    expect(account2.balance).toBe(20);
	});

  it("can credit account", () => {
    const user1 = 1;
    const account1 = createOne(user1, 10);

    credit(user1, 20);

    const account = findOne(user1);
    
    expect(account.balance).toBe(30);
	});

  it("can debit account", () => {
    const user1 = 1;
    const account1 = createOne(user1, 10);

    debit(user1, 5);

    const account = findOne(user1);
    
    expect(account.balance).toBe(5);
	});

  it("can successfully transfer funds", () => {
    const user1 = 1;
    const account1 = createOne(user1);
    
    const user2 = 2;
    const account2 = createOne(user2, 20);

    transfer(user2, user1, 10);

    const getAccount1 = findOne(user1);
    const getAccount2 = findOne(user2);
    
    expect(getAccount1.balance).toBe(10);
    expect(getAccount2.balance).toBe(10);
	});

});

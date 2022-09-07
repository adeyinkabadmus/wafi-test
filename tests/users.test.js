import { describe, expect, test } from "@jest/globals";
import { createOne, createProfile, findAll, findOne } from "../services/user.js";

describe("User management", () => {

  it("creates a single user", () => {
    const name = "user1";
    const newUser = createOne(name);

    const user = findOne(newUser.id);
    
		expect(Object.prototype.hasOwnProperty.call(user, "id")).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(user, "name")).toBe(true);

    expect(user.id).toBe(1);
    expect(user.name).toBe(name);
	});

  it("creates a user profile", () => {
    const name = "user1";
    const user = createProfile(name);
    
    expect(user.name).toBe(name);
    expect(user.balance).toBe(0);
	});

	it("returns an array of users", () => {
    const user1 = createOne("user1");
    const user2 = createOne("user2");

    const users = findAll();

		expect(users.length).toBe(2);
	});
});

import { describe, expect, test } from "@jest/globals";
import { createOne, findAll, findOne } from "../services/user.js";

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

	it("returns an array of users", () => {
    const user1 = createOne("user1");
    const user2 = createOne("user2");

    const users = findAll();

		expect(users.length).toBe(2);
	});
});

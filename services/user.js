import { createOne as createAccount } from "./account.js";

let lastId = 0;

let users = {};

/**
 * gets all users
 *
 * @param {void}
 * @returns {Array<{id: number, name: string}>}
 */
const findAll = () => {
	return Object.values(users);
};

/**
 * get a single user
 *
 * @param {number} id
 * @returns {{id: number, name: string}}
 */
const findOne = (id) => {
	return users[id];
};

/**
 * creates a single user
 *
 * @param {string} name
 * @returns {{id: number, name: string}}
 */
const createOne = (name) => {
	lastId++;
	const user = {
		name,
		id: lastId,
	};
	users[lastId] = user;
	return users[lastId];
};

/**
 * creates a user profile and
 * also creates a account
 * profile
 *
 * @param {string} name
 * @param {number} amount
 * @returns {{name: string, id: number, balance: number}}
 */
const createProfile = (name, amount = 0) => {
	const user = createOne(name);
	const account = createAccount(user.id, amount);
	return {
		...user,
		balance: account.balance,
	};
};

/**
 * deletes a user
 *
 * @param {number} id
 * @return {void}
 */
const deleteOne = (id) => {
	delete users[id];
};

const deleteAll = () => {
	users = {};
};

export { findAll, findOne, createOne, deleteOne, deleteAll, createProfile };

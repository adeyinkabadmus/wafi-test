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
    id: lastId
	};
	users[lastId] = user;
  return users[lastId];
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

export { findAll, findOne, createOne, deleteOne };

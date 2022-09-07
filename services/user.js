let lastId = 0;

let users = {};

const findAll = () => {
  return Object.values(users);
};

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

const deleteOne = (id) => {
	delete users[id];
};

export { findAll, findOne, createOne, deleteOne };

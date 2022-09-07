// { userId: { userId: number, balance: number } }
let accounts = {};

/**
 *
 * @param {number} from
 * @param {number} to
 * @param {number} amount
 * @returns {{ from: object, to: object}}
 */
const transfer = (from, to, amount) => {
	if (isNaN(amount)) return "amount is not a number";
	if (!accounts[from]) return "Sender account does not exist";
	if (!accounts[to]) return "Recipient account does not exist";
	//debit from account
	let creditAcc;
	const debitAcc = debit(from, amount);
	if (debitAcc) {
		//credit to account
		creditAcc = credit(to, amount);
		if (!creditAcc) {
			// reverse operation
			debit(from, amount);
			return "Transfer failed";
		}
	}
	return {
		from: debitAcc,
		to: creditAcc,
	};
};

/**
 * credits account balance
 *
 * @param {number} userId
 * @param {number} amount
 * @returns {{userId: number, amount: number}|null}
 */
const credit = (userId, amount) => {
	if (accounts[userId]) {
		const account = accounts[userId];
		account.balance = isNaN(account.balance)
			? Number(amount)
			: Number(amount) + account.balance;
		return account;
	}
	return null;
};

/**
 * debits account balance
 *
 * @param {number} userId
 * @param {number} amount
 * @returns {{userId: number, amount: number}|null}
 */
const debit = (userId, amount) => {
	if (accounts[userId]) {
		const account = accounts[userId];
		account.balance = isNaN(account.balance)
			? 0 - Number(amount)
			: account.balance - Number(amount);
		return account;
	}
	return null;
};

/**
 * creates a user account
 *
 * @param {number} userId
 * @param {number} amount
 * 
 * @return {{userId: number, amount: number}}
 */
const createOne = (userId, amount = 0) => {
	accounts[userId] = {
		userId,
		balance: amount,
	};
	return accounts[userId];
};

/**
 * get user account balance
 *
 * @param {number} userId
 * @returns {{userId: number, amount: number}}
 */
const findOne = (userId) => {
	return accounts[userId];
};

const deleteAll = () => {
	accounts = {};
};

export { createOne, transfer, debit, credit, findOne, deleteAll };

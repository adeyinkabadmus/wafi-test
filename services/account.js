// { userId: accountBalance }
const accounts = {};

/**
 * 
 * @param {number} from 
 * @param {number} to 
 * @param {number} amount 
 * @returns {{ from: object, to: object}}
 */
const transfer = (from, to, amount) => {
  if (isNaN(amount)) return "amount is not a number";
  if (isNaN(accounts[from])) return "Sender account does not exist";
  if (isNaN(accounts[to])) return "Recipient account does not exist";
	//debit from account
  let creditBalance;
  const debitBalance = debit(from, amount);
  if (!isNaN(debitBalance)) {
    //credit to account
    creditBalance = credit(to, amount);
    if (!isNaN(creditBalance)) {
      // reverse operation
      debit(from, amount);
      if (isNaN(accounts[to])) return "Transfer failed";
    }
  }
  return {
    from: { [from]: debitBalance },
    to: { [to]: creditBalance },
  };
};

/**
 * credits account balance
 * 
 * @param {number} userId 
 * @param {number} amount 
 * @returns {number|null}
 */
const credit = (userId, amount) => {
	if (accounts[userId]) {
		accounts[userId] = isNaN(accounts[userId])
			? Number(amount)
			: Number(amount) + accounts[userId];
	}
	return accounts[userId] || null;
};

/**
 * debits account balance
 * 
 * @param {number} userId 
 * @param {number} amount 
 * @returns {number|null}
 */
const debit = (userId, amount) => {
	if (accounts[userId]) {
		accounts[userId] = isNaN(accounts[userId])
			? 0 - Number(amount)
			: Number(amount) - accounts[userId];
	}
	return accounts[userId] || null;
};

/**
 * creates a user account
 * 
 * @param {number} userId 
 * @param {number} amount 
 */
const createOne = (userId, amount = 0) => {
	accounts[userId] = amount;
  return accounts[userId];
};

/**
 * get user account balance
 * 
 * @param {number} userId 
 * @returns {number}
 */
const findOne = (userId) => {
  return accounts[userId];
};

export {
  createOne,
  transfer,
  findOne,
};

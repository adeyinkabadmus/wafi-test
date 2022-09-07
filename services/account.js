// { userId: accountBalance }
const accounts = {};

const transfer = (from, to, amount) => {
  if (isNaN(amount)) return "amount is not a number";
  if (isNaN(accounts[from])) return "Sender account does not exist";
  if (isNaN(accounts[to])) return "Recipient account does not exist";
	//debit from account
  const debitBalance = debit(from, amount);
  const creditBalance = null;
  if (!isNaN(debitBalance)) {
    //credit to account
    const creditBalance = credit(to, amount);
    if (!isNaN(creditBalance)) {
      // reverse operation
      debit(from, amount);
      if (isNaN(accounts[to])) return "Transfer failed";
    }
  }
  return {
    from: {
      [from]: balance,
    },
    to: {
      [to]: creditBalance,
    },
  };
};

const credit = (userId, amount) => {
	if (accounts[userId]) {
		accounts[userId] = isNaN(accounts[userId])
			? Number(amount)
			: Number(amount) + accounts[userId];
	}
	return accounts[userId] ?? null;
};

const debit = (userId, amount) => {
	if (accounts[userId]) {
		accounts[userId] = isNaN(accounts[userId])
			? 0 - Number(amount)
			: Number(amount) - accounts[userId];
	}
	return accounts[userId] ?? null;
};

const createOne = (userId, amount = 0) => {
	accounts[userId] = amount;
};

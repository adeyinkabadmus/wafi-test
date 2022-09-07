import { deleteAll as deleteAllUsers } from "../services/user.js";
import { deleteAll as deleteAllAccounts } from "../services/account.js";

beforeEach(async () => {
  //clear in memory database
  //before each test
	deleteAllUsers();
  deleteAllAccounts();
	//done();
});

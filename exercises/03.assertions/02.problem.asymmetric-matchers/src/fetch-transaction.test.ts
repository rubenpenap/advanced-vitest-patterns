import { fetchTransaction, type Transaction } from './fetch-transaction'
import { userSchema } from './schemas'

test('fetches a transaction between two users', async () => {
	// 🐨 Declare a variable called `transaction` and assign it the result
	// of calling `fetchTransaction` with the argument `'transaction-1'`.
	// Notice that the `fetchTransaction` function returns a promise.
	// 💰 const foo = await bar()
	//
	// 🐨 Next, write an assertion that the returned `transaction` equals
	// a transaction object. Such an object has the following properties:
	// - `id` equal to `'transaction-1'`;
	// - `issuer` that matches the `userSchema` schema;
	// - `recipient` that matches the `userSchema` schema.
	// 💰 expect(transaction).toEqual<Transaction>({})
	// 💰 expect.toMatchSchema(schema)
})

import { fetchTransaction, type Transaction } from './fetch-transaction'
import { userSchema } from './schemas'

test('fetches a transaction between two users', async () => {
	const transaction = await fetchTransaction('transaction-1')

	// 🐨 Write an assertion over the `transaction` object.
	// In the expected object, express that the `id` property should
	// equal to the transaction ID, and both `issuer` and `recipient`
	// properties should match the `userSchema` schema.
	// 💰 expect(transaction).toEqual<Transaction>({})
	// 💰 expect.toMatchSchema(schema)
})

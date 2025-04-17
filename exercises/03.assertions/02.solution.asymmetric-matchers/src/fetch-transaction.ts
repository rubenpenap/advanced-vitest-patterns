import type { User } from './schemas'

export interface Transaction {
	id: string
	issuer: User
	recipient: User
}

/**
 * Returns the transaction with the given ID.
 */
export async function fetchTransaction(id: string): Promise<Transaction> {
	return {
		id,
		issuer: {
			id: 'user-123',
			name: 'John Maverick',
		},
		recipient: {
			id: 'user-456',
			name: 'Kate Wilson',
		},
	}
}

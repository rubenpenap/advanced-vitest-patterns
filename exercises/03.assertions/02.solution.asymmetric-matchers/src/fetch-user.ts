import type { User } from './schemas'

/**
 * Returns the user with the given ID.
 */
export async function fetchUser(id: string): Promise<User> {
	return {
		id,
		name: 'John Maverick',
	}
}

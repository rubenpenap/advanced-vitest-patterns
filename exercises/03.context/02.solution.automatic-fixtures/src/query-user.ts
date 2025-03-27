import { client } from './db'

export interface User {
	id: string
	name: string
}

export async function queryUser(id: string): Promise<User> {
	return await client.query(`SELECT * FROM users WHERE id = ?`, [id])
}

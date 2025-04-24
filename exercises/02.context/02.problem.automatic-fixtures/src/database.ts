import sqlite3, { type Database } from 'sqlite3'

export class DatabaseClient {
	constructor(private readonly db: Database) {}

	public async query(query: string, params: Array<unknown>): Promise<any> {
		return new Promise((resolve, reject) => {
			this.db.get(query, params, function (error, row) {
				if (error) {
					return reject(error)
				}

				resolve(row)
			})
		})
	}
}

export const client = new DatabaseClient(new sqlite3.Database(':memory:'))

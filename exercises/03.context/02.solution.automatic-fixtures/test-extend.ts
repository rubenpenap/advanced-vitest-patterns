import { test as testBase } from 'vitest'
import sqlite3, { type Database } from 'sqlite3'

interface Fixtures {
	createMockDatabase: (
		init: (database: Database, done: () => void) => void,
	) => Promise<void>
}

export const test = testBase.extend<Fixtures>({
	createMockDatabase: [
		async ({ task }, use) => {
			const db = new sqlite3.Database(':memory:')

			vi.doMock(import('./src/db'), async (importOriginal) => {
				const original = await importOriginal()
				const mockClient = new original.DatabaseClient(db)

				return {
					...original,
					client: mockClient,
				}
			})

			await new Promise<void>((resolve) => {
				db.serialize(() => {
					db.run('CREATE TABLE users (id TEXT, name TEXT)', resolve)
				})
			})

			await use((initDatabase) => {
				return new Promise((resolve) => {
					initDatabase(db, resolve)
				})
			})

			await new Promise<void>((resolve) => {
				db.close(() => resolve())
			})
			vi.doUnmock(import('./src/db'))
		},
		{
			auto: true,
		},
	],
})

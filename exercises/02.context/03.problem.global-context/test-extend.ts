import * as fs from 'node:fs'
import * as path from 'node:path'
import { test as testBase } from 'vitest'
import sqlite3, { type Database } from 'sqlite3'
import * as databaseModule from './src/database'

interface Fixtures {
	createMockDatabase: (
		seed: (database: Database, handle: CallbackHandle) => void,
	) => Promise<void>
}

// 🐨 Augment the module declaration for "vitest".
// 💰 declare module 'vitest' {}

// 🐨 In the module declaration, declare an interface called `TestContext`
// and make it extend your custom `Fixtures` interface. Then, export it.
// This will annotate the custom test content of the global `test()` function.
// 💰 export interface A extends B {}

// 🐨 Declare a namespace for `globalThis`.
// Inside that namespace, declare a variable called `test`
// and assign it the type of `testBase` function.
// This annotate the `globalThis.test` function so your extension below
// would be type-safe.
// 💰 declare namespace globalThis {}
// 💰 var test: typeof testBase

type CallbackHandle = (error?: Error | null, ...args: Array<any>) => void

function toPromise<T>(init: (handle: CallbackHandle) => T): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		const result = init((error) => {
			if (error) {
				return reject(error)
			}
			resolve(result)
		})
	})
}

// 💣 Finally, delete the `test` variable declaration
// and replace it with assigning to `globalThis.test`.
// 💰 globalThis.test = testBase.extend<T>({})
export const test = testBase.extend<Fixtures>({
	createMockDatabase: [
		async ({ task, onTestFinished }, use) => {
			const databasePath = `${task.file.filepath}-${task.id}.sqlite`

			if (fs.existsSync(databasePath)) {
				await fs.promises.rm(databasePath)
			}

			const mockDatabase = await toPromise((handle) => {
				return new sqlite3.Database(databasePath, handle)
			})

			onTestFinished(async ({ task }) => {
				await toPromise((handle) => mockDatabase.close(handle))

				if (task.type !== 'test') {
					return
				}

				if (task.result?.state === 'pass') {
					await fs.promises.rm(databasePath)
				} else {
					task.result?.errors?.push({
						name: 'Mock database',
						message: 'See the database state:',
						codeFrame: path.relative(process.cwd(), databasePath),
					})
				}
			})

			const clientSpy = vi
				.spyOn(databaseModule, 'client', 'get')
				.mockReturnValue(new databaseModule.DatabaseClient(mockDatabase))

			await toPromise((handle) => {
				mockDatabase.run('CREATE TABLE users (id TEXT, name TEXT)', handle)
			})

			await use((seed) => {
				return toPromise((handle) => {
					seed(mockDatabase, handle)
				})
			})

			clientSpy.mockRestore()
		},
		{
			auto: true,
		},
	],
})

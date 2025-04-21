import { setTimeout } from 'node:timers/promises'

for (let i = 0; i < 100; i++) {
	// 🐨 Replace the `test()` function below with `test.concurrent()`.
	// This will make all the test cases in this test file run simultaneously.
	test(`${i}`, async ({ expect }) => {
		await setTimeout(25)
		expect(i).toBe(i)
	})
}

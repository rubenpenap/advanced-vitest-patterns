export function expensiveCompute() {
	const rows = []

	for (let i = 0; i < 100_000_000; i++) {
		rows.push(i)
	}

	return rows
}

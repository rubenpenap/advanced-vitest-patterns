export function sortBy<T extends Record<string, unknown>>(
	list: Array<T>,
	sortKey: keyof T,
): Array<T> {
	const clone = structuredClone(list)

	clone.sort((left, right) => {
		return left[sortKey] < right[sortKey] ? -1 : 1
	})

	return clone
}

export function slugify(input: string): string {
	return input.replace(/\s+/g, '-')
}

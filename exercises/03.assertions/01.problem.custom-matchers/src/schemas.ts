import z from 'zod'

export const userSchema = z.object({
	id: z.string(),
	name: z.string(),
})

const r = userSchema.safeParse({})

export type User = z.infer<typeof userSchema>

import { User } from './user'
import { UnlimitedPlan } from './plans'

beforeAll(() => {
	vi.useFakeTimers()
	vi.setSystemTime(new Date('2025-12-02T00:00:00Z'))
})

afterAll(() => {
	vi.useRealTimers()
})

test('cancels the user subscription', () => {
	const user = new User()
	user.subscribe(new UnlimitedPlan())

	expect.soft(user.subscription.name).toBe('Unlimited')
	expect.soft(user.subscription.kind).toBe('yearly')
	expect.soft(user.subscription.state).toBe('active')
	expect.soft(user.subscription.endsAt).toBeUndefined()

	user.cancelSubscription()

	expect.soft(user.subscription.state).toBe('cancelled')
	expect.soft(user.subscription.endsAt).toBe('2026-01-01T00:00:00.000Z')
})

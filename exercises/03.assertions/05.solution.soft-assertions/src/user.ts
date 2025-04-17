import { TrialPlan, type Plan } from './plans'

export class User {
	public subscription: Plan

	constructor() {
		this.subscription = new TrialPlan()
	}

	public subscribe(subscription: Plan) {
		this.subscription = subscription
	}

	public cancelSubscription() {
		this.subscription.cancel()
	}
}

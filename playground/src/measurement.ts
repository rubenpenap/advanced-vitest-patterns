type MeasurementUnit = 'in' | 'cm'

export class Measurement {
	constructor(
		public readonly value: number,
		public readonly unit: MeasurementUnit,
	) {}

	public equals(other: Measurement): boolean {
		if (this.unit === other.unit) {
			return this.value === other.value
		}

		const thisValue = this.unit === 'in' ? this.value * 2.54 : this.value
		const otherValue = other.unit === 'in' ? other.value * 2.54 : other.value

		return thisValue === otherValue
	}
}

import { Measurement } from './measurement'

test('compares measurements', () => {
	expect(new Measurement(10, 'in')).toEqual(new Measurement(25.4, 'cm'))
})

test('compares nested measurements', () => {
	expect({
		id: 1,
		name: 'fabric',
		length: new Measurement(10, 'in'),
	}).toEqual({
		id: 1,
		name: 'fabric',
		length: new Measurement(25.4, 'cm'),
	})
})

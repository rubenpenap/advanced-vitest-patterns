import { EventEmitter } from 'node:events'

export class Server extends EventEmitter {
	constructor() {
		super()
		this.on('request', (requestType, respondWith) => {
			queueMicrotask(() => {
				switch (requestType) {
					case 'fruits': {
						return respondWith(['apple', 'banana', 'cherry'])
					}

					default: {
						return respondWith('unknown request')
					}
				}
			})
		})
	}
}

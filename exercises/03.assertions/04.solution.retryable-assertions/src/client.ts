import { EventEmitter } from 'node:events'
import { Server } from './server'

export class Client extends EventEmitter {
	private server: Server

	constructor() {
		super()
		this.server = new Server()
	}

	public request(
		requestType: string,
		responseListener: (data: unknown) => void,
	) {
		this.server.emit('request', requestType, responseListener)
	}
}

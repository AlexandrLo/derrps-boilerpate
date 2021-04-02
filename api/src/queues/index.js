import { BullAdapter, setQueues } from 'bull-board'
import Queue from 'bull'
import exampleProcessor from './example.processor'

const redisConfig = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
}

// Init queues
const exampleQueue = new Queue('Example', { redis: redisConfig })
exampleQueue.process('ExampleScheduled', exampleProcessor)

// Schedule jobs
exampleQueue.add('ExampleScheduled', null, { repeat: { cron: '* * * * *' } })

// Init bull-board
setQueues([new BullAdapter(exampleQueue)])

export { exampleQueue }

export default {
	exampleQueue,
}

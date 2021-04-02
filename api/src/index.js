import Logger from 'utils/logger'
import csurf from 'csurf'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import queues from 'queues'
import rateLimit from 'express-rate-limit'
import { router } from 'bull-board'
import session from 'cookie-session'

// Create App
const app = express()

// Init Queues Dashboard
app.use('/api/bull', router)

// Init Security
app.set('trust proxy', true)
app.use(helmet())
app.use(hpp())

// Init Cookies
app.use(
	session({
		name: 'session',
		secret: process.env.SESSION_SECRET,
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
	}),
)
app.use(csurf())

// Init limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
})
app.use(limiter)

// Routes
app.get('/', (req, res) => {
	res.send('App is working!')
})
app.get('/api', (req, res) => {
	res.send('App API is working!')
})
app.get('/api/random', (req, res) => {
	res.send(`${Math.floor(Math.random() * 9)}`)
})

// Start App
const port = process.env.PORT || '8080'
app.listen(port, () => {
	Logger.info(`App listening at http://localhost:${port}`)
})

// Init queues
Logger.info('Queues inited: %o', Object.keys(queues))

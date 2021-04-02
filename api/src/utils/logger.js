import { addColors, createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import TelegramLogger from 'winston-telegram'

const { combine, timestamp, printf, colorize, splat } = format

// Define custom log levels and colors
const customLevels = {
	levels: {
		error: 0,
		warning: 1,
		info: 2,
		http: 3,
		verbose: 4,
		debug: 5,
		silly: 6,
	},
	colors: {
		error: 'red',
		warning: 'yellow',
		info: 'cyan',
		http: 'green',
		verbose: 'magenta',
		debug: 'blue',
		silly: 'white',
	},
}

// Log format for file and console transports
const logFormat = printf(
	({ level, message, timestamp }) => `${timestamp} - ${level}: ${message}`,
)

// Log format for telegram transport
const tgFormat = ({ level, message }) => {
	const trimmedMsg = message.substring(0, 4000)
	return `⛔ ${level.toUpperCase()}\n${trimmedMsg}`
}

// Create logger with custom levels and colors
const logger = createLogger({
	levels: customLevels.levels,
	format: splat(),
})
addColors(customLevels.colors)

// Add transports for prod and dev environment
if (process.env.NODE_ENV === 'production') {
	// Prod env logger transports
	logger
		.add(
			new DailyRotateFile({
				format: combine(timestamp(), logFormat),
				dirname: 'logs',
				filename: 'application-%DATE%.log',
				level: 'info',
				datePattern: 'YYYY-MM-DD-HH',
				maxSize: '20m',
				maxFiles: '14d',
				createSymlink: true,
				symlinkName: 'application-current.log',
				handleExceptions: true,
			}),
		)
		.add(
			new TelegramLogger({
				formatMessage: tgFormat,
				token: process.env.TG_BOT_TOKEN,
				chatId: process.env.TG_ADMIN,
				level: 'error',
				handleExceptions: true,
			}),
		)
} else {
	// Dev env logger transports
	logger
		.add(
			new transports.Console({
				format: combine(colorize(), timestamp(), logFormat),
				level: 'info',
				handleExceptions: true,
			}),
		)
		.add(
			new DailyRotateFile({
				format: combine(timestamp(), logFormat),
				dirname: 'logs',
				filename: 'application-%DATE%.log',
				level: 'debug',
				datePattern: 'YYYY-MM-DD',
				maxSize: '20m',
				maxFiles: '2d',
				createSymlink: true,
				symlinkName: 'application-current.log',
				handleExceptions: true,
			}),
		)
}

export default logger

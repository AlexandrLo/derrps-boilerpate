import logger from 'utils/logger'

export default (job, done) => {
	logger.info('Example job fired')
	done()
}

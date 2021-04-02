import Sequelize from 'sequelize'
import configs from 'database/config'
import importAll from 'import-all.macro'

const env = process.env.NODE_ENV || 'development'
const config = configs[env]
const db = {}

// Init db connection
const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config,
)

// Init all models
const models = importAll.sync('./*.model.js')
for (const modelInit of Object.values(models)) {
	// Init model
	const model = modelInit.default(sequelize, Sequelize.DataTypes)
	db[model.name] = model
	// Init model associations
	if (db[model.name].associate) db[model.name].associate(db)
}

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db

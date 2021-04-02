import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
	class User extends Model {}

	User.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			firstname: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			lastname: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			username: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			last_login: {
				allowNull: true,
				type: DataTypes.DATE,
			},
			status: {
				allowNull: false,
				defaultValue: 'active',
				type: DataTypes.ENUM(['active', 'suspended', 'disabled']),
			},
		},
		{
			sequelize,
			modelName: 'User',
		},
	)
	return User
}

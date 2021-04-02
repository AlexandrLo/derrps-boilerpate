export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstname: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			lastname: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			last_login: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			status: {
				allowNull: false,
				defaultValue: 'active',
				type: Sequelize.ENUM(['active', 'suspended', 'disabled']),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable('Users')
	},
}

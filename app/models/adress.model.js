module.exports = (sequelize, Sequelize) => {
	const Adress = sequelize.define('Adress', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		civility: {
			type: Sequelize.STRING,
			allowNull: false
		},
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		phone: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		street: {
			type: Sequelize.STRING,
			allowNull: false
		},
		complement: {
			type: Sequelize.STRING,
			allowNull: false
		},
		zipCode: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		city: {
			type: Sequelize.STRING,
			allowNull: false
		},
		country: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});

	return Adress;
};

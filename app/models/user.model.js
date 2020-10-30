module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('User', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			unique: true
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
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
		is_admin: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		},
		address: {
			type: Sequelize.STRING,
			defaultValue: ''
		},
		photo_url: {
			type: Sequelize.STRING,
			defaultValue: ''
		},
		phone: {
			type: Sequelize.STRING,
			defaultValue: ''
		},
		stripe_customer_id: {
			type: Sequelize.STRING,
			defaultValue: ''
		}
	});

	//
	// Insert seed users
	// Insert admin user

	// const bcrypt = require('bcrypt');
	// const users = require('../seeders/users');

	// sequelize
	// 	.sync()
	// 	.then(() => {
	// 		User.findAndCountAll().then((result) => {
	// 			if (!result || result.count === 0) {
	// 				if (
	// 					process.env.ADMIN_EMAIL &&
	// 					process.env.ADMIN_FNAME &&
	// 					process.env.ADMIN_LNAME &&
	// 					process.env.ADMIN_PASSWORD
	// 				) {
	// 					const hashed = bcrypt.hashSync(process.env.ADMIN_PASSWORD, bcrypt.genSaltSync(10));
	// 					User.create({
	// 						first_name: process.env.ADMIN_FNAME,
	// 						last_name: process.env.ADMIN_LNAME,
	// 						email: process.env.ADMIN_EMAIL,
	// 						password: hashed,
	// 						is_admin: true
	// 					});
	// 				}

	// 				for (let i = 0; i < users.length; i++) {
	// 					const salt = bcrypt.genSaltSync(10);
	// 					const hash = bcrypt.hashSync(users[i].password, salt);

	// 					User.create({
	// 						first_name: users[i].first_name,
	// 						last_name: users[i].last_name,
	// 						email: users[i].email,
	// 						password: hash,
	// 						is_admin: false
	// 					});
	// 				}
	// 			}
	// 		});
	// 	})
	// 	.catch((e) => {
	// 		console.log('ERROR SYNCING WITH DB: ', e);
	// 	});

	return User;
};

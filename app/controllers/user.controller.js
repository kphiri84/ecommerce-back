const db = require('../models');
const User = db.user;

exports.allUsers = (req, res) => {
	User.findAll().then((users) => res.json(users)).catch((err) => {
		// console.log('Products err!', err);
		return res.status(400).send(err.message);
	});
};

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content")
}

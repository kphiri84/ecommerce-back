exports.getOneAdress = (req, res) => {
	Adress.findByPk(req.params.id).then((adress) => res.json(adress)).catch((err) => {
		return res.status(400).send(err.message);
	});
};

exports.postAdresses = (req, res) => {
	Adress.create({
		civility: req.body.civility,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		phone: req.body.phone,
        street: req.body.street,
        complement: req.body.complement,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country
	}).then((adresses) => res.json(adresses));
};
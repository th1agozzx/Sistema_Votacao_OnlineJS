const Eleitor = require('../models/eleitor');

exports.create = (req, res) => {
    const { nome, cpf, email, senha } = req.body;
    Eleitor.create({ nome, cpf, email, senha }, (err, id) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id });
    });
};

exports.getAll = (req, res) => {
    Eleitor.findAll((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Adicione outros métodos conforme necessário (ex. getById, update, delete)
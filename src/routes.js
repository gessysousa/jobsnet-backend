const express = require ('express');
const CandidateController = require ('./controller/CandidateController');

//routes aonde ficam todas as rotas do software
const routes = new express.Router();

//ação a ser executada quando /register for acionado
routes.post('/register', CandidateController.register);
routes.get("/", (req, res) => {
    res.send("Servidor Online");
});

module.exports = routes;
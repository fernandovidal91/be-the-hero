const express = require('express');//Precisa instalar pacote

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();//Precisa instalar pacote

//Lista uma ong
routes.get('/ongs', OngController.index);

//Cadastra uma ong
routes.post('/ongs', OngController.create);

//Lista casos
routes.get('/incidents', IncidentController.index);

//Cria casos
routes.post('/incidents', IncidentController.create);

//Deleta um caso
routes.delete('/incidents/:id', IncidentController.delete);

//Lista os casos de uma ong especifica selecionada pelo id
routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;
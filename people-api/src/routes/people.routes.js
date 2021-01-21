// @ts-nocheck
/**
 * arquivo: routes/people-routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

const router = require('express-promise-router')();
const peopleController = require('../controllers/people.controller');

// ==> Definindo as rotas do CRUD - 'People'

// ==> Rota responsável por criar uma nova 'Pessoa': (POST): localhost:3000/api/peoples
router.post('/peoples', peopleController.createPeople);

// ==> Rota responsável por listar todos as 'Pessoas': (GET): localhost:3000/api/peoples
router.get('/peoples', peopleController.listAllPeople);

// ==> Rota responsável por listar uma determinada 'Pessoa' por Id: (GET): localhost:3000/api/peoples/:id
router.get('/peoples/:id', peopleController.findPeopleById)

// ==> Rota reponsável por atualizar uma determinada 'Pessoa(a) por Id: (PUT): localhost:3000/api/peoples/:id
router.put('/peoples/:id', peopleController.updatePeopleById)

// ==> Rota responsável por deletar/excluir uma determinada 'Pessoa(a) por Id: localhost:3000/api/peoples/:id
router.delete('/peoples/:id', peopleController.deletePeopleById);

module.exports = router;
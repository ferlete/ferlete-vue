/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexão com o arquivo 'server.js'
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (People):
const index = require('./routes/index');
const peopleRoute = require('./routes/people.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', peopleRoute);

module.exports = app;
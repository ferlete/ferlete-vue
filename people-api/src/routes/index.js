/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-End
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL (Back-End)',
    version: '1.0.0'
  });
});

module.exports = router;
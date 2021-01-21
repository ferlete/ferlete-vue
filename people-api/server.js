/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execucação do Back-End ('People')
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});


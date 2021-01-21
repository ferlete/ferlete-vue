/**
 * file: src/services/Api.js
 * description: arquivo responsável por inicializar o 'axios' e
 *  as requisições da url base dos HTTP's
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
  baseURL: 'http://localhost:3000/api',
});

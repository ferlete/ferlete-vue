/**
 * file: src/services/PeopleService.js
 * description: arquivo responsável pelos métodos de requisições das Apís via HTTP
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import Api from './Api';

export default {
  /**
   * Método responsável por criar um novo(a) 'People'
   * (POST): localhost:3000/api/peoples
   */
  async createNewPeople(people) {
    try {
      const response = await Api().post('/peoples', people);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por listar todos os 'Peoples'
   * (GET): localhost:3000/api/peoples
   */
  async getPeoples() {
    try {
      const response = await Api().get('/peoples');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por Listar por Id um determinado 'People'
   * (GET): localhost:3000/api/peoples/:id
   */
  async getPeopleId(id) {
    try {
      const response = await Api().get(`/peoples/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por atualizar um determinado 'People' por Id
   * (PUT): localhost:3000/api/peoples/:id
   */
  async updatePeople(people) {
    try {
      const id = people.id;
      const response = await Api().put(`/peoples/${id}`, people);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por excluir um determinado 'People' por Id
   * (DELETE): localhost:3000/api/peoples/:id
   */
  async deletePeople(id) {
    try {
      const response = await Api().delete(`/peoples/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};

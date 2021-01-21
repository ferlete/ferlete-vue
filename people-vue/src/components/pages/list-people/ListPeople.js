// @ts-nocheck
/**
 * file: src/components/pages/list-people/ListPeople.js
 * description: arquivo responsável pela lógica do componente
 *  ListPeopleComponent.vue'
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import PeopleService from '../../../services/PeopleService';

export default {
  name: 'ListPeopleComponent',
  data() {
    return {
      peoples: [],
    };
  },
  mounted() {
    this.listAllPeoples();
  },
  methods: {
    async listAllPeoples() {
      const response = await PeopleService.getPeoples();
      this.peoples = response;
    },

    async removePeople(id) {
      this.$swal({
        title: 'Tem certeza que quer excluir essa pessoa?',
        text: 'Cuidado! Esta pessoa será excluida!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Por Favor, Exclua!',
      }).then(async (result) => {
        if (result.value) {
          await PeopleService.deletePeople(id);
          this.$swal('Excluido', 'Excusão Sucesso', 'success');
          this.listAllPeoples();
        } else {
          this.$swal('Cancelado', 'Exclusão Cancelada', 'info');
        }
      });
    },
  },
};

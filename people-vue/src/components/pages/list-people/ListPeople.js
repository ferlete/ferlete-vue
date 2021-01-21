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
        title: 'Are you sure you want to delete the people?',
        text: 'Watch out! This People will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await PeopleService.deletePeople(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listAllPeoples();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};

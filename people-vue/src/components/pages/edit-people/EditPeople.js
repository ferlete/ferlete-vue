/**
 * file: src/components/pages/edit-people/EditPeople.js
 * description: arquivo responsável pela lógica do componente
 *  'EditPeopleComponent.vue'
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import PeopleService from '../../../services/PeopleService';

export default {
  name: 'EditPeopleComponent',
  data() {
    return {
      peopleForm: {
      },
    };
  },

  mounted() {
    this.getPeopleById();
  },

  methods: {
    async getPeopleById() {
      const { id } = this.$route.params;
      const response = await PeopleService.getPeopleId(id);

      this.peopleForm = { ...response };
    },

    async updateFormPeople() {
      // Chamada do service passando as propriedades por meio do 'peopleForm' (funciona)
      await PeopleService.updatePeople(this.peopleForm);
      this.$swal({
        title: 'People updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};

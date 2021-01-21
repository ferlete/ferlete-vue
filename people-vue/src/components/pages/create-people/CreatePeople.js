// @ts-nocheck
/**
 * file: src/components/pages/create-people/CreatePeople.js
 * description: arquivo responsável pela lógica do componente
 *  'CreatePeopleComponent.vue'
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import { required } from 'vuelidate/lib/validators';
import PeopleService from '@/services/PeopleService';

export default {
  name: 'CreatePeopleComponent',
  data() {
    return {
      peopleForm: {
        id: null,
        nome: null,
        nascimento: null,
        CPF: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    peopleForm: {
      name: { required },
      nascimento: { required },
      CPF: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewPeople() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await PeopleService.createNewPeople(this.peopleForm);
        this.$swal({
          title: 'People added successfully!',
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};

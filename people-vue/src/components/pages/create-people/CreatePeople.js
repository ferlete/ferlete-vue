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
      id: { required },
      nome: { required },
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
          this.$swal('Oops!', 'Todos os campos devem ser preenchidos', 'error');
          return;
        }

        await PeopleService.createNewPeople(this.peopleForm);
        this.$swal({
          title: 'Pessoa adiconada com sucesso!',
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

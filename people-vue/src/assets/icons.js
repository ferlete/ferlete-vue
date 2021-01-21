/**
 * file: assets/icons.js
 * description: arquivo responsável por lidar com a lógica dos ícones na aplicação
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

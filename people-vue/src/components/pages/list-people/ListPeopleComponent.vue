<template>
  <div>
    <h3 class="text-center">Lista de Todas Pessoas</h3>
    <table class="table table-striped">
      <thead>
        <tr>

          <th class="text-center">id</th>
          <th class="text-center">Nome</th>
          <th class="text-center">Nascimento</th>
          <th class="text-center">CPF</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="people in peoples" :key="people.id">
          <td>{{ people.id }}</td>
          <td>{{ people.nome }}</td>
          <td>{{ people.nascimento }}</td>
          <td>{{ people.cpf }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: people.id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Alterar
            </router-link>
          </td>
          <td>
            <button @click="removePeople(people.id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListPeople.js"></script>

<style src="" scoped></style>

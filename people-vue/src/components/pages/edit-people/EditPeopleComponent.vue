<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update People</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormPeople()">

          <!--INÍCIO DO BLOCO: People Id-->
          <div class="form-group">
            <label class="font-weight-bold">id</label>
            <input
              type="text"
              id="id"
              name="id"
              class="form-control"
              v-model="peopleForm.id"
            >
          </div>
          <!--FIM DO BLOCO: People id-->

          <!--INÍCIO DO BLOCO: People Name-->
          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              v-model="peopleForm.name"
            >
          </div>
          <!--FIM DO BLOCO: People Name-->

          <!--INÍCIO DO BLOCO: Nascimento-->
          <div class="form-group">
            <label class="font-weight-bold">Nascimento</label>
            <input
              type="date"
              id="nascimento"
              name="nascimento"
              class="form-control"
              v-model="peopleForm.nascimento"
            >
          </div>
          <!--FIM DO BLOCO: Birth-->

          <!--INÍCIO DO BLOCO: People CPF-->
          <div class="form-group">
            <label class="font-weight-bold">CPF</label>
            <input
              type="text"
              id="CPF"
              name="CPF"
              class="form-control"
              v-model="peopleForm.CPF"
            >
          </div>
          <!--FIM DO BLOCO: Nascimento-->
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditPeople.js"></script>

<style src="" scoped></style>

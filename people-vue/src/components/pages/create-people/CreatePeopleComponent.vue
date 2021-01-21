<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Pessoa</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- INÍCIO BLOCO: id -->
          <div class="form-group">
            <label class="font-weight-bold">id</label>
            <input
              type="text"
              id="id"
              name="id"
              class="form-control"
              placeholder="Informe ID"
              v-model="peopleForm.id"
              :class="{
                'is-invalid': isSubmitted && $v.peopleForm.id.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.peopleForm.id.required"
              class="invalid-feedback"
            >
              'People id' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: People id -->

          <!-- INÍCIO BLOCO: People Name -->
          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              class="form-control"
              placeholder="Digite o Nome"
              v-model="peopleForm.nome"
              :class="{
                'is-invalid': isSubmitted && $v.peopleForm.nome.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.peopleForm.name.required"
              class="invalid-feedback"
            >
              'People Name' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: People Name -->

          <!-- INÍCIO BLOCO: Nascimento -->
          <div class="form-group">
            <label class="font-weight-bold">Nascimento</label>
            <input
              type="date"
              id="nascimento"
              name="nascimento"
              class="form-control"
              placeholder="DD/MM/YYYY"
              v-model="peopleForm.nascimento"
              :class="{
                'is-invalid': isSubmitted && $v.peopleForm.nascimento.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.peopleForm.nascimento.required"
              class="invalid-feedback"
            >
              'Nascimento' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: Nascimento -->

          <!-- INÍCIO BLOCO: CPF -->
          <div class="form-group">
            <label class="font-weight-bold">CPF</label>
            <input
              type="text"
              id="CPF"
              name="CPF"
              class="form-control"
              placeholder="CPF"
              v-model="peopleForm.CPF"
              :class="{
                'is-invalid':
                  isSubmitted && $v.peopleForm.CPF.$error,
              }"
            />
            <div
              v-if="
                isSubmitted && !$v.peopleForm.CPF.required
              "
              class="invalid-feedback"
            >
              'CPF' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: CPF -->
          <div class="form-group">
            <button @click="submitNewPeople" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreatePeople.js"></script>

<style src="" scoped></style>

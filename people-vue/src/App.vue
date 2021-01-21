<template>
  <div id="app">
    <!-- INÍCIO NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Adicionar Pessoa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list-peoples">Listar Todas Pessoas</router-link>
        </li>
      </ul>
    </nav>
    <!-- FIM NAVBAR -->

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

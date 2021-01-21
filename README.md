# Simples CRUD Node.js + Vue.js + PostgreSQL
Este é uma simples aplicação cliente/servidor desenvolvido utilizando linguagens Vue.js + Node.js e Banco de Dados PostgreSQL com a finalidade de Adicionar, Alterar e Excluir registro de uma tabela de pessoas.


## Estrutura de Diretórios

* People-api (API Back-end)
* People-vue (Front-end)
* SQL (Script de criação das Tabelas do DB)
* Imagens (Print Screen do Sistema e DB)

## Recursos Utilizados no Desenvolvimento
* **[WebStorm - Jetbrain]((https://www.postgresql.org/download/))**
* **[Node.js](https://nodejs.org/en/)**
* **[Vue.js](https://vuejs.org/)**
* **[PostgreSQL Server e PgAdmin4 Client](https://www.postgresql.org/download/)**

## Versões Utilizadas

```sh
$ node -v                                                                                                                                                                                                                                                                                                                                               
v10.19.0

$ vue -V
@vue/cli 4.5.10

$ /usr/lib/postgresql/12/bin/postgres -V
postgres (PostgreSQL) 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)


```

## Criação do Usuário e Banco de Dados

Para Criar o Banco de Dados execute os comando abaixo no console do PSQL.
```sh
$ sudo -u postgres psql postgres
postgres=# CREATE USER ferlete WITH PASSWORD 'secret';
postgres=# CREATE DATABASE development;
postgres=# GRANT ALL PRIVILEGES ON DATABASE development TO ferlete;
```

## Download Projeto

```sh 
$ git clone https://github.com/ferlete/ferlete-vue
$ cd ferlete-cue
```

# Back end (API)
## Configuração de acesso ao DB
altere o arquivo .env na raiz como exemplo abaixo

```properties
DATABASE_URL=postgres://ferlete:secret@localhost:5432/development
```

## Setup e Execução do Front-end
O mesmo ficara executando na porta TCP/3000 definido em server.js

```sh
$ cd people-api
$ npm i --save-dev husky nodemon
$ npm install nodemon -g --save
$ nodemon server.js
```
## Exemplos de posteman

* Criar uma nova 'Pessoa': (POST): localhost:3000/api/peoples
* Listar todos as 'Pessoas': (GET): localhost:3000/api/peoples
* Listar uma determinada 'Pessoa' por Id: (GET): localhost:3000/api/peoples/:id
* Atualizar uma determinada 'Pessoa por Id: (PUT): localhost:3000/api/peoples/:id
* Deletar/excluir uma determinada 'Pessoa por Id: localhost:3000/api/peoples/:id

# Front end

## Setup e Execução do Back-end

```sh
$ cd people-api
$ npm install --save axios nprogress vuelidate/lib/validators
$ npm install jquery
$ npm install @popperjs/core --save
$ npm install
$ npm run serve
```

# TODO
* Corrigir a edição de pessoa
* Incluir regras de validação em todos os campo de entrada
* Utilização de Docker
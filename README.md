# Simples CRUD Node.js + PostgreSQL + People API

## Estrutura de Diretórios

* People-api (API com a lógica de persistência)
* People-vue (Front-end)
* SQL (Script de criação das Tabelas do DB)

## Recursos Utilizados
* **[WebStorm - Jetbrain]((https://www.postgresql.org/download/))**
* **[Node.js](https://nodejs.org/en/)**
* **[PostgreSQL - PgAdmin4](https://www.postgresql.org/download/)**


## Criação do Usuário e Banco de Dados
```
CREATE USER user WITH PASSWORD 'secret';
CREATE DATABASE DBProva;
GRANT ALL PRIVILEGES ON DATABASE DBProva TO user;
```

## Download

```
git clone https://github.com/ferlete/ferlete-vue
cd ferlete-cue
```


## Execução do Front-end

```
cd people-vue
npm install
npm run serve
```
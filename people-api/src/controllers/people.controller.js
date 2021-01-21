/**
 * arquivo: controllers/people-routes.js
 * descrição: arquivo responsável pela lógica do CRUD (API - People)
 * data: 21/01/2021
 * author: Valter Ferlete <ferlete@gmail.com>
 * datas em postgresql: https://www.postgresqltutorial.com/postgresql-date/
 */

const db = require("../config/database");

// ==> Método responsável por criar um novo 'People':
exports.createPeople = async (req, res) => {
  const { id, nome, nascimento, CPF} = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO people (id, nome, nascimento, CPF) VALUES ($1, $2, $3, $4)",
      [id, nome, nascimento, CPF]
    );
    res.status(201).send({
      message: "People added successfully!",
      body: {
        people: { id, nome, nascimento, CPF },
      },
    });
  } catch (error) {
    console.error('createPeople', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar todos os 'Peoples':
exports.listAllPeoples = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
                                      id,
                                      nome,                                       
                                      to_char(nascimento, 'dd/mm/yyyy') as nascimento,
                                      CPF 
                                    FROM people ORDER BY nome asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listAllPeople', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar um determinado 'People' por Id:
exports.findPeopleById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
                                      id,
                                      nome,                                       
                                      to_char(nascimento, 'dd/mm/yyyy') as nascimento,
                                      CPF 
                                    FROM people WHERE id = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'people_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findPeopleById', error);
    if (error == 'people_not_found') {
      res.status(404).send({
        message: "People not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Método responsável por atualizar um determinado 'People' por Id:
exports.updatePeopleById = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, nascimento, CPF } = req.body;
    const { rows } = await db.query(`UPDATE people 
                                    SET nome = $1, 
                                    nascimento = $2, 
                                    CPF = $3,                                     
                                    WHERE id = $4`,
      [nome, nascimento, CPF, id]
    );
    res.status(200).send({ message: "People Updated Successfully!" });
  } catch (error) {
    console.error('updatePeopleById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por deletar um determinado 'People' por Id:
exports.deletePeopleById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM people WHERE id = $1", [id]);
    res.status(200).send({ message: "People deleted successfully!" });
  } catch (error) {
    console.error('deletePeopleById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

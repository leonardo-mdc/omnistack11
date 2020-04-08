const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recursos
 */

 /**
  * Metodos HTTP
  *
  * GET: Buscar uma informacao do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informacao no back-end
  *
  */

/**
 * Tipos de Parametros
 *
 *  Query Params: Paraâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *  Route Params: Parâmetros utilizados para identificar recursos
 *  Request Body: Corpo da requisição, utilizado para
 *
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  *
  */

/**
 * Driver: SELECT * FROM users
 * QUery Builder: table('users').select('*').where()
 */



app.listen(3333);

var knex = require('knex')({//importa a biblioteca knex e configura a conexão com o MySQL
    client: 'mysql', // mostra que vamos usar MySQL
    connection: {
        host : 'localhost', // servidor do banco de dados (local)     
        user : 'root',      // usuário do banco
        password : '',       // senha (123)
        database : 'db_yago' // nome do banco de dados
     }
});
module.exports = knex // permite que essa classe possa ser usada para outras classes

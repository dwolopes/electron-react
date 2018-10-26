const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

const consultaQuite = (inscricao) => {
  let query;
  connection.query(`SELECT * FROM cds_quites WHERE insc=${inscricao}`, (error, results, fields) => {
    if (error) throw error;
    console.log(results)
  });
  return query;
};


module.exports = {
  consultaQuite,
};

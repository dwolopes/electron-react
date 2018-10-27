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

const consultaQuite = (inscricao, callback) => {
  console.log(inscricao)
    connection.query(`SELECT * FROM cds_quites WHERE insc=${inscricao}`, (error, results, fields) => {
    if (error) {
      callback(error, null)
    } else {
      let dataResult = JSON.stringify(results)
      let dataJson = JSON.parse(dataResult)
      console.log(dataJson)
      callback(null, dataJson[0]);
    }
  });
};


module.exports = {
  consultaQuite,
};
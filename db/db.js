const connStr = "Server=ip;Database=db;User Id=usuario;Password=senha;";
const sql = require("mssql");

sql.connect(connStr)
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));
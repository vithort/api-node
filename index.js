const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080; //porta padrão
const sql = require('mssql');
const connStr = "Server=IP;Database=db;User Id=usuario;Password=senha;";

//fazendo a conexão global
sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
//router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

async function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}

router.get('/', (req, res) => {
    execSQLQuery(`SELECT 'R$ ' + CAST(CAST(SUM(VALOR) AS money) AS VARCHAR(20)) Valor FROM ly_item_lanc WHERE ALUNO = '${req.query.aluno}'`, res);
})

exports.get = async (req, res, next) => {
    console.log("chamando");
    await request("http://www.google.com", function (error, response, body) {
        res.json(body);
    });
};
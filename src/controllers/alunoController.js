var request = require("request");

exports.get = async (req, res, next) => {
  console.log("chamando");
  await request("http://www.google.com", function (error, response, body) {
    res.json(body);
  });
};

exports.getById = (req, res, next) => {
  res.status(200).send('Requisição recebida com sucesso!');
};


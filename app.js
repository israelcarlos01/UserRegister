const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

//ajuda no tratamento de erro
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); //aceita apenas dados simples
app.use(bodyParser.json());// json de entrada no body

//tratando erros CORS *-Pesquisar mais sobre esses errors-* 
app.use((req, res, next) => {
    //Define a origem que nosso site pode ser acessado
    res.header('Acces-Control-Allow-Origin', '*');
    //Define quis são os cabeçalhos que vamos aceitar
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    //Define quais são os metodos que a gente pode retonar
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});


app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//tratamento para quando ele não encontrar nenhuma rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;
const express = require('express');
const router = express.Router();

// retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    });
});

//Insere um produto
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).send({
        mensagem: 'insere um produto',
        productCreate: product
    });
});

// Busca por um produto específico de acordo com o id
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: 'detalhes do produto',
        id: id
    });
});


//altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});

//Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'produto deletado '
    });
});



module.exports = router;
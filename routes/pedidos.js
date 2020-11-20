const express = require('express');
const router = express.Router();

// retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

// Busca por um pedido específico de acordo com o id
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: 'detalhes de um pedido',
        id_pedido: id
    });
});

//Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido deletado'
    });
});



module.exports = router;
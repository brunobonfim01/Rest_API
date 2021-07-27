const express = require('express');
const app = express ();

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

// BLOCO USADO PRA TESTES 
/*app.use((req,res,next) =>{
    res.status(200).send({
        mensagem: 'OK , Deu Certo'
    });
});*/

module.exports= app;
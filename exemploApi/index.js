// Importações
const express = require('express');
const calculadoraRoute = require('./routes/calculadora');
const productRoute = require('./routes/produto')
const cors = require('cors');

// Configuração das express
const app = express();
app.use(express.json());
app.use(cors());

// Configuração das rotas
app.use('/calculadora', calculadoraRoute);
app.use('/produto', productRoute);



app.listen(3000, () =>
    console.log('Servidor rodando na porta: 3000'));
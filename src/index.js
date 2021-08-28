//importação
const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');

const app = express();

//conexão do mongoDb
mongoose.connect('mongodb+srv://gama:PGpLddI2K8DjZjOj@cluster0.05ebd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


//evitando erro de cors
app.use(cors());

//definição de middlewares
app.use(express.json()); //requisições

//configuração swagger
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); 

//configuração de rotas
app.use(routes); 

//configuração servidor
app.listen(process.env.PORT || 5000, () => { 
    console.log('rodando na porta 5000');
})



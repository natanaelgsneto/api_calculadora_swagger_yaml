const express = require("express");
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Calculadora",
            description: "API Calculadora com swagger Yaml",
            version: "1.0.0"
        },
        host: "localhost:3333",
        basePath: "/",
        schemes: [
            "http"
        ],
    },
    apis: ['swagger.js'],
};

const swagger = swaggerJsDoc(swaggerOptions);
app.use('/api-calculadora',swaggerUI.serve, swaggerUI.setup(swagger));


//Rotas para acessar as operações
require('./routes/index')(app);

app.listen(3333, () => {
  console.log("server listening on port 3333");
});

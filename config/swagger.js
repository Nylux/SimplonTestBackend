const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Carambar Blagues API",
            version: "1.0.0",
            description: "Une API pour récupérer et ajouter des blagues Carambar.",
        },
        servers: [{ url: "http://localhost:3000/api" }], // Ajoute "/api" à l'URL de base
    },
    apis: ["./routes/*.js"], // Indique où Swagger doit chercher les routes
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };

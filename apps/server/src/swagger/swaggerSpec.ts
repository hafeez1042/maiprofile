import swaggerJsdoc from "swagger-jsdoc";
import { schemas } from "./schemas";

// const schemas = require("@quadspire/sd-shared/schema.json");

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MAIProfile API with Swagger",
      version: "1.0.0",
      description:
        "This is the CRUD API application made with ExpressJS and documented with Swagger",
      // license: {
      //   name: "MIT",
      //   url: "https://spdx.org/licenses/MIT.html",
      // },
      // contact: {
      //   name: "Quadspire Inc.",
      //   url: "https://www.quadspire.com",
      //   email: "info@quadspire.com",
      // },
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      parameters: {
        CustomerIDHeader: {
          name: 'Customer-ID',
          in: 'header',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Customer identification header',
        },
      },
      schemas: schemas
    },
    servers: [
      {
        url: "http://localhost:3100/v1",
      },
     
    ],
   
    security: [{
      BearerAuth: [],
    }],
  },
  apis: ["./src/routes/**/*.ts"],
};

const swaggerSpec = { ...swaggerJsdoc(options) };

export default swaggerSpec;

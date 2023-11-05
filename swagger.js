const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'API Cosmetics',
        version: '1.0.0',
        description: 'Your API description',
      },
      basePath: '/',
    },
    apis: ['./routes/authRoute.js', './routes/productRoute.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
  module.exports = swaggerSpec;

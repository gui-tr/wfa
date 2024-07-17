    const swaggerUi = require('swagger-ui-express');
    const YAML = require('yamljs');
    const path = require('path');

    const swaggerDocument = YAML.load(path.join(__dirname, '..', '..', 'openapi.yml'));

    const setupSwagger = (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    };

    module.exports = setupSwagger;

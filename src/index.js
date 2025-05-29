const express = require('express');
const sequelize = require('./utils/db');
const mainRouter = require('./routes/mainRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const authHandler = require('./utils/middlewares/authHandler');

const app = express();
app.use(express.json());

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api',authHandler, mainRouter);

// Global error handler
app.use(require('./utils/middlewares/errorHandler'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


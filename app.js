const express = require('express');
const cors = require('cors');
const path = require('path');
var logger = require('pino-http')({
    enabled: process.env.NODE_ENV != 'test',
    prettyPrint: { translateTime: true }
});


const routes = require('./modules/routes');
const { errorHandler, path404Handler } = require('./utils/errorHandler');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(logger);

app.use('/api', routes);

app.use(path404Handler);
app.use(errorHandler);

module.exports = app;

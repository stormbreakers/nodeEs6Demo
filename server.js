'use strict';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes  from './app/routes/routes';
import config from './app/config/config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use('/', routes);

const server = app.listen(process.env.PORT || config.port, () => {
    // destructuring
    const {address, port} = server.address();

    // string interpolation:
    console.log(`Example app listening at http://${address}:${port}`);
});
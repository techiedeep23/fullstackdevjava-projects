const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const compression = require('compression');
const winston = require('winston');
const appConfig = require('./src/config');


const port = process.env[appConfig.appPrefix + '_NODE_PORT'] || 2000;

// create logger to log info and errors with timestamp
const logger = winston.createLogger({
    level : 'info',
    format : winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:SSSS'}),
        winston.format.printf(
            info => `${info.timestamp}\t${info.message}`
        )
    ),
    transports : [
        new winston.transports.File({filename: `${__dirname}/log/error.log`,level:'error'}),
        new winston.transports.File({filename: `${__dirname}/log/output.log`,level:'info'})
    ]
});

const app = express();
//app.use(cors);
app.use(compression);
app.use(express.json());


app.listen(port, () => {
    console.log(appConfig.appPrefix)
    console.log(`library app listening on port ${port}`);
});
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const compression = require('compression');
const winston = require('winston');
const appConfig = require('./src/config');
const connectLibraryDb = require('./src/config/dbConfig');
const errorHandler = require("./src/middleware/errorHandler");



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
        new winston.transports.File({filename: `${__dirname}/logs/error.log`,level:'error'}),
        new winston.transports.File({filename: `${__dirname}/logs/output.log`,level:'info'})
    ]
});
connectLibraryDb();
const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());


app.use("/books", require("./src/routes/libraryRoute"));
app.use("/members", require("./src/routes/memberRoute"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(appConfig.appPrefix)
    console.log(`library app listening on port ${port}`);
});
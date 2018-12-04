import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import log4js from 'log4js';

import routes from 'src/routes';

import dotenv from 'dotenv';

dotenv.config();

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.use(function(err, req, res, next) {
  log4js.getLogger().error(err);
  res.status(500).send();
}); 

process.on('uncaughtException', function (err) {
  log4js.getLogger().error(err);
});

log4js.configure({
  appenders: { error: { type: 'file', filename: 'error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
});

server.listen(process.env.PORT);
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import log4js from 'log4js';

import settings from './settings';
import routes from './routes';

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

server.listen(settings.port);
const express = require('express');
const launchesRouter = express.Router();

const {
  httpGetLaunches,
  httpSendLaunches,
  httpAbortLaunch,
} = require('../launches/launches.controller');

launchesRouter.get('/launches', httpGetLaunches);
launchesRouter.post('/launches', httpSendLaunches);
launchesRouter.delete('/launches/:id', httpAbortLaunch);

module.exports = { launchesRouter };

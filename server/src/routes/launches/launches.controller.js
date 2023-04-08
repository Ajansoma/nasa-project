const {
  getAllLaunches,
  addNewLaunches,
  existingLaunches,
  abortLaunches,
} = require('../../model/launches.model');

const httpGetLaunches = function (req, res) {
  return res.status(200).json(getAllLaunches());
};

const httpSendLaunches = function (req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid date',
    });
  }

  addNewLaunches(launch);
  return res.status(201).json(launch);
};

const httpAbortLaunch = function (req, res) {
  const launchId = +req.params.id;

  const existsLaunch = existingLaunches(launchId);
  if (!existsLaunch) {
    return res.status(400).json({
      error: 'Launch not found',
    });
  }

  const aborted = abortLaunches(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: 'Launch not aborted',
    });
  }

  return res.status(200).json({ ok: true });
};

module.exports = { httpGetLaunches, httpSendLaunches, httpAbortLaunch };

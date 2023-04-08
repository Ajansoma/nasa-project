const launches = new Map();

let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  rocket: 'Explorer IS1',
  mission: 'Journey To Mars',
  launchDate: new Date('July 1, 2040'),
  target: 'Kepler_1652 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = function () {
  return Array.from(launches.values());
};

const addNewLaunches = function (launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ['ZTM', 'NASA'],
      upcoming: true,
      success: true,
    })
  );
};

const existingLaunches = function (launchId) {
  return launches.has(launchId);
};

const abortLaunches = function (launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

module.exports = {
  getAllLaunches,
  addNewLaunches,
  existingLaunches,
  abortLaunches,
};

import express from 'express';
import ViteExpress from 'vite-express';

import apiController from './controllers/apiController.js';
import gcpController from './controllers/gcpController.js';

import k8s from '@kubernetes/client-node';

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/teamdata', apiController.getTeamData, (req, res) => {
  return res.status(200).json({ teamData: res.locals.teamData });
});

app.get('/squaddata/:id', apiController.getSquadData, (req, res) => {
  return res.status(200).json({ squadData: res.locals.squadData });
});

app.get('/playerdata/:id', apiController.getPlayerData, (req, res) => {
  return res.status(200).json({ playerData: res.locals.playerData });
});

app.get('/gcpmonitor', gcpController.getMonitorData, (req, res) => {
  console.log('test');
  return res.status(200).json({ monitorData: res.locals.monitorData });
});

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

//const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sApiMetrics = kc.makeApiClient(k8s.CustomObjectsApi);

const getPodMetrics = async () => {
  try {
    const res = await k8sApiMetrics.listClusterCustomObject(
      'metrics.k8s.io',
      'v1beta1',
      'pods'
    );
    console.log('Pod Metrics: ', res.body.items[4].metadata);
  } catch (err) {
    console.error('Error fetching pod metrics:', err);
  }
};

getPodMetrics();

// const main = async () => {
//   try {
//     //console.log(k8sApi);
//     const podsRes = await k8sApi.listNamespace();
//     console.log('pods: ', podsRes.body.items[0].metadata);
//   } catch (err) {
//     console.error(err);
//   }
// };

// main();

// const main2 = async () => {
//   try {
//     console.log(k8sApi3);
//     const podsRes = await k8sApi3.defaultHeaders;
//     console.log('pods: ', podsRes.body);
//   } catch (err) {
//     console.error(err);
//   }
// };

//main2();

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

ViteExpress.listen(app, PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;

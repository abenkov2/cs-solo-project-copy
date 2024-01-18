import express from 'express';
import ViteExpress from 'vite-express';

import apiController from './controllers/apiController.js';

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

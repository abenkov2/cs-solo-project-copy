//const fetch = require('node-fetch');
import fetch from 'node-fetch';

const apiController = {};

apiController.getTeamData = (req, res, next) => {
  //const { id } = req.params;

  fetch(
    `https://api.sportmonks.com/v3/football/teams/seasons/21646?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&include=players&select=name`
  )
    .then((data) => data.json())
    .then((data) => {
      //console.log(data);
      console.log(Object.values(data));
      res.locals.teamData = data;
      return next();
    })
    // .then((data) => {
    //   const playerIDArray = [];
    //   for (let i = 0; i < data.length; i++) {
    //     const team = data[i];
    //     console.log(data[i]);
    //     // if('players' in team){
    //     //     for(let j = 0; j < players.length; i++){
    //     //         const player = players[j]
    //     //     }
    //     // }
    //   }
    //   return next();
    .catch((err) => {
      return next({
        log: `apiController.getTeamData: ERROR ${err}`,
        status: 500,
        message: {
          err: 'Error occured in apiController.getTeamData. Check server logs.',
        },
      });
    });
};

export default apiController;

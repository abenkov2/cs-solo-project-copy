import fetch from 'node-fetch';

//fetch team ID in current league (21646 is EPL 23/24)
//https://api.sportmonks.com/v3/football/teams/seasons/21646?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&select=name

//fetch player IDs in current team (18 is Chelsea)
//https://api.sportmonks.com/v3/football/squads/teams/18?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&include=player

//fetch player position & stats by current player (1494245 is Conor Gallagher)
//https://api.sportmonks.com/v3/football/players/1494245?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&include=position;statistics.details.type&filters=playerStatisticSeasons:21646&select=name

const apiController = {};

apiController.getTeamData = (req, res, next) => {
  fetch(
    `https://api.sportmonks.com/v3/football/teams/seasons/21646?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&select=name`
  )
    .then((data) => data.json())
    .then((data) => {
      //console.log(data);
      res.locals.teamData = data;
      return next();
    })
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

apiController.getSquadData = (req, res, next) => {
  const team_id = req.params.id;
  fetch(
    `https://api.sportmonks.com/v3/football/squads/teams/${team_id}?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&include=player`
  )
    .then((data) => data.json())
    .then((data) => {
      //console.log(data);
      res.locals.squadData = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `apiController.getSquadData: ERROR ${err}`,
        status: 500,
        message: {
          err: 'Error occured in apiController.getSquadData. Check server logs.',
        },
      });
    });
};

apiController.getPlayerData = (req, res, next) => {
  const player_id = req.params.id;
  fetch(
    `https://api.sportmonks.com/v3/football/players/${player_id}?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&include=position;statistics.details.type&filters=playerStatisticSeasons:21646&select=name`
  )
    .then((data) => data.json())
    .then((data) => {
      //console.log(data);
      res.locals.playerData = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `apiController.getPlayerData: ERROR ${err}`,
        status: 500,
        message: {
          err: 'Error occured in apiController.getPlayerData. Check server logs.',
        },
      });
    });
};

export default apiController;

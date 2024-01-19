import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 2)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );

  // const [data, setData] = useState({
  //   squadData: {},
  //   playerData: {},
  // });
  const [dataC, setDataC] = useState([]);
  const [dataP, setDataP] = useState([]);

  return (
    <div id="app">
      <h1>EPL PLAYER SEARCH</h1>
      <p>For each player search, please enter club and player name...</p>
      <SearchBoard
        dataC={dataC}
        setDataC={setDataC}
        dataP={dataP}
        setDataP={setDataP}
      />
    </div>
  );
}

const SearchBoard = ({ dataC, setDataC, dataP, setDataP }) => {
  const [searchTermC, setSearchTermC] = useState('');
  const [searchTermP, setSearchTermP] = useState('');

  const teamIDs = {
    'Brighton & Hove Albion': 78,
    Fulham: 11,
    Liverpool: 8,
    Arsenal: 19,
    'Wolverhampton Wanderers': 29,
    'Luton Town': 115,
    'Crystal Palace': 51,
    'Sheffield United': 21,
    'Manchester United': 14,
    Brentford: 236,
    'AFC Bournemouth': 52,
    'Newcastle United': 20,
    'Nottingham Forest': 63,
    Everton: 13,
    'Manchester City': 9,
    'West Ham United': 1,
    Chelsea: 18,
    'Aston Villa': 15,
    'Tottenham Hotspur': 6,
    Burnley: 27,
  };

  const handleSearchClubs = async () => {
    try {
      console.log('Attempting to find squad data: ', { searchTermC });
      const searchID = teamIDs[searchTermC];
      const response = await fetch(
        `http://localhost:8000/squaddata/${searchID}`
      );
      const squadData = await response.json();
      console.log(`${searchTermC} squad data: `, squadData);

      setDataC((prevData) => ({
        ...prevData,
        squadData: squadData || [],
      }));
    } catch (error) {
      console.error('Error fetching squad data: ', error);
    }
  };

  const handleSearchPlayers = async () => {
    try {
      console.log('Attempting to find player data: ', { searchTermP });
      await handleSearchClubs();
      //console.log('Attempt to find squad inside player search:', dataC);
      //console.log(dataC.squadData.squadData.data);
      let searchID = '';
      console.log(dataC);
      const playerSearchData = dataC.squadData.squadData.data || [];
      for (let i = 0; i < playerSearchData.length; i++) {
        //console.log(data.squadData.squadData.data[i].player.name);
        //console.log(searchTermP);
        if (
          searchTermP === playerSearchData[i].player.display_name ||
          searchTermP === playerSearchData[i].player.name
        ) {
          console.log(
            `${searchTermP} player info: `,
            playerSearchData[i].player
          );
          searchID = playerSearchData[i].player.id;
        }
      }
      console.log(searchID);
      const response = await fetch(
        `http://localhost:8000/playerdata/${searchID}`
      );
      const playerData = await response.json();
      console.log(`${searchTermP} player data: `, playerData);

      setDataP((prevData) =>
        // ...prevData,
        // playerData: playerData || [],
        [...prevData, playerData || []]
      );
    } catch (error) {
      console.error('Error fetching player data: ', error);
    }
  };
  //console.log(dataP);
  return (
    <div>
      <SearchClub
        searchTermC={searchTermC}
        onSearchChangeC={setSearchTermC}
        onSearchClickC={handleSearchClubs}
      />
      <p></p>
      <p>---</p>
      <p></p>
      <SearchPlayer
        searchTermP={searchTermP}
        onSearchChangeP={setSearchTermP}
        onSearchClickP={handleSearchPlayers}
      />
      <p></p>
      <p>---</p>
      <p></p>
      <SearchResult dataP={dataP} />
    </div>
  );
};

const SearchClub = ({ searchTermC, onSearchChangeC, onSearchClickC }) => {
  return (
    <div className="SearchClub">
      <label>
        <input
          type="text"
          value={searchTermC}
          onChange={(e) => onSearchChangeC(e.target.value)}
        />
      </label>
      <p></p>
      <button onClick={onSearchClickC}>Search Clubs</button>
    </div>
  );
};

const SearchPlayer = ({ searchTermP, onSearchChangeP, onSearchClickP }) => {
  return (
    <div className="SearchPlayer">
      <label>
        <input
          type="text"
          value={searchTermP}
          onChange={(e) => onSearchChangeP(e.target.value)}
        />
      </label>
      <p></p>
      <button onClick={onSearchClickP}>Search Players</button>
    </div>
  );
};

const SearchResult = ({ dataP }) => {
  //console.log(dataP);
  return (
    //console.log()
    <div className="SearchResult">
      <p></p>
      <h2>Player Statistics</h2>
      <p></p>

      {dataP.map((player, index) => {
        // for (let key in player.playerData.data.statistics[0].details) {
        //   console.log(
        //     `${key}: ${JSON.stringify(
        //       player.playerData.data.statistics[0].details[key]
        //     )}`
        //   );

        // }
        let goalStat = 0;
        let appStat = 0;
        let startStat = 0;
        let minsStat = 0;

        const playerStats = player.playerData.data.statistics[0].details;
        for (let i = 0; i < playerStats.length; i++) {
          console.log(playerStats[i].type);
          if ('Goals' === playerStats[i].type.name) {
            //console.log(playerStats[i].value.total);
            goalStat = playerStats[i].value.total;
          }
          if ('Appearances' === playerStats[i].type.name) {
            appStat = playerStats[i].value.total;
          }
          if ('Lineups' === playerStats[i].type.name) {
            startStat = playerStats[i].value.total;
          }
          if ('Minutes Played' === playerStats[i].type.name) {
            minsStat = playerStats[i].value.total;
          }
        }

        let mpgStat = Math.round(minsStat / appStat);
        let gpmStat = Math.round(minsStat / goalStat);

        return (
          <div key={index}>
            <p>Name: {player.playerData.data.name}</p>
            <p>Position: {player.playerData.data.position.name}</p>
            <p>-</p>
            <p>
              Appearances: {appStat} ({startStat} starts)
            </p>
            <p>
              Minutes Played: {minsStat} ({mpgStat} per game)
            </p>
            <p>-</p>
            <p>
              Goals: {goalStat} ({gpmStat} mins per goal)
            </p>
            <p>Passes: {player.passes}</p>
            <p>Tackles: {player.tackles}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;

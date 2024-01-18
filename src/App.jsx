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

  return (
    <div id="app">
      <h1>EPL PLAYER SEARCH</h1>
      <p>For each player search, please enter club and player name...</p>
      <SearchBoard />
    </div>
  );
}

const SearchBoard = () => {
  const [searchTermC, setSearchTermC] = useState('');
  const [searchTermP, setSearchTermP] = useState('');
  const [personData, setPersonData] = useState(null);

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

  const data = {
    squadData: {},
    playerData: {},
  };

  const handleSearchClubs = async () => {
    try {
      console.log('Attempting to find data: ', { searchTermC });
      const searchID = teamIDs[searchTermC];
      const response = await fetch(
        `http://localhost:8000/squaddata/${searchID}`
      );
      data.squadData = await response.json();
      console.log(data.squadData);
    } catch (error) {
      console.error('Error fetching squad data: ', error);
    }
  };

  const handleSearchPlayers = async () => {
    try {
      console.log('Attempting to find data: ', { searchTermP });
      await handleSearchClubs();
      // console.log(
      //   'Attempt to find squad inside player search:',
      //   data.squadData
      // );
      //console.log(data.squadData.squadData.data);
      let searchID = '';
      const playerSearchData = data.squadData.squadData.data;
      for (let i = 0; i < playerSearchData.length; i++) {
        //console.log(data.squadData.squadData.data[i].player.name);
        //console.log(searchTermP);
        if (searchTermP === playerSearchData[i].player.name) {
          console.log(playerSearchData[i].player);
          searchID = playerSearchData[i].player.id;
        }
      }
      //const searchID = '1494245';
      const response = await fetch(
        `http://localhost:8000/playerdata/${searchID}`
      );
      data.playerData = await response.json();
      console.log(data.playerData);
    } catch (error) {
      console.error('Error fetching player data: ', error);
    }
  };

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
      <SearchResult />
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

const SearchResult = () => {
  return (
    <div>
      <h2>Player Details</h2>
      <p>Name:</p>
    </div>
  );
};

export default App;

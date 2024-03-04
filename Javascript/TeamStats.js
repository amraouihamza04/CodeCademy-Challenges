///////////////// TEAM STATS !!



// Create an object 'team'
const team = {
    // Array of player objects with first name, last name, and age
    _players: [
      { firstName: "Hakim", lastName: "Ziyech", age: 27 },
      { firstName: "Achraf", lastName: "Hakimi", age: 22 },
      { firstName: "Adil", lastName: "Taarabet", age: 32 },
    ],
  
    // Array of game objects with opponent, team points, and opponent points
    _games: [
      { opponent: "Spain" },
      { teamPoints: 9 },
      { opponentPoints: 7 },
      { opponent: "Portugal" },
      { teamPoints: 7 },
      { opponentPoints: 7 },
      { opponent: "Belgium" },
      { teamPoints: 5 },
      { opponentPoints: 2 },
    ],
  
    // Getter method to retrieve the player array
    get players() {
      return this._players;
    },
  
    // Getter method to retrieve the games array
    get games() {
      return this._games;
    },
  
    // Method to add a new player to the _players array
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(newPlayer);
    },
  
    // Method to add a new game to the _games array
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(newGame);
    },
  };
  
  // Add a new player to the _players array
  team.addPlayer("Bugs", "Bunny", 76);
  // Log the updated _players array
  console.log(team.players);
  
  // Add a new game to the _games array
  team.addGame("Titans", 100, 98);
  // Log the updated _games array
  console.log(team.games);
  
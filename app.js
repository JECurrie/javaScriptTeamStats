const team = {
  _players: [{firstName: "Pablo", lastName: "Sanchez", age: 11},
            {firstName: "Abe", lastName: "Bell", age: 11},
            {firstName: "Bill", lastName: "Curl", age: 11},],
  _games: [
    {opponent: "Broncos", teamPoint: 42, opponentsPoints: 27},
  {opponent: "Ace", teamPoint: 23, opponentsPoints: 20},
  {opponent: "Sun", teamPoint: 15, opponentsPoints: 18}
  ],
  
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },  
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);  
  },
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
  		opponentPoints: oppPoints
    }
    this.games.push(game);  
  }  
}

team.addPlayer("Janet", "Smith", "28");
team.addPlayer("James", "Lyell", "27");
team.addPlayer("Joan", "Eliabeth", "26");

console.log(team.players);

team.addGame("Sea Lion", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("Tigers", 30, 47);

console.log(team.games);
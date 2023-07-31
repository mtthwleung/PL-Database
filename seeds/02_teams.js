/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('teams').del()
  await knex('teams').insert([
    { stadium_id: '1', name: "Arsenal", transfer_budget: 100, league_wins: 13, european_cup_wins: 0 },
    { stadium_id: '2', name: "Aston Villa", transfer_budget: 70, league_wins: 7, european_cup_wins: 1 },
    { stadium_id: '3', name: "Bournemouth", transfer_budget: 30, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '4', name: "Brentford", transfer_budget: 40, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '5', name: "Brighton & Hove Albion", transfer_budget: 80, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '6', name: "Burnley", transfer_budget: 30, league_wins: 2, european_cup_wins: 0 },
    { stadium_id: '7', name: "Chelsea", transfer_budget: 150, league_wins: 6, european_cup_wins: 2 },
    { stadium_id: '8', name: "Crystal Palace", transfer_budget: 40, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '9', name: "Everton", transfer_budget: 45, league_wins: 9, european_cup_wins: 0 },
    { stadium_id: '10', name: "Fulham", transfer_budget: 50, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '11', name: "Liverpool", transfer_budget: 100, league_wins: 19, european_cup_wins: 6 },
    { stadium_id: '12', name: "Luton", transfer_budget: 15, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '13', name: "Manchester City", transfer_budget: 150, league_wins: 9, european_cup_wins: 1 },
    { stadium_id: '14', name: "Manchester United", transfer_budget: 125, league_wins: 20, european_cup_wins: 3 },
    { stadium_id: '15', name: "Newcastle United", transfer_budget: 125, league_wins: 4, european_cup_wins: 0 },
    { stadium_id: '16', name: "Nottingham Forest", transfer_budget: 50, league_wins: 1, european_cup_wins: 2 },
    { stadium_id: '17', name: "Sheffield United", transfer_budget: 30, league_wins: 1, european_cup_wins: 0 },
    { stadium_id: '18', name: "Tottenham Hotspur", transfer_budget: 80, league_wins: 2, european_cup_wins: 0 },
    { stadium_id: '19', name: "West Ham United", transfer_budget: 75, league_wins: 0, european_cup_wins: 0 },
    { stadium_id: '20', name: "Wolverhampton Wanderers", transfer_budget: 60, league_wins: 3, european_cup_wins: 0 },
  ]);
};

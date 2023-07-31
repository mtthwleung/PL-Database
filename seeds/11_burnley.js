/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Josh Brownhill', position: 'Central Midfield', team_id: 6, national_team_id: null, market_value: 18 },
    { player_name: 'Jordan Beyer', position: 'Centre Back', team_id: 6, national_team_id: null, market_value: 16 },
    { player_name: 'James Trafford', position: 'Goalkeeper', team_id: 6, national_team_id: null, market_value: 15 },
    { player_name: 'Josh Cullen', position: 'Central Midfield', team_id: 6, national_team_id: null, market_value: 13 },
    { player_name: 'Wout Weghorst', position: 'Centre Forward', team_id: 6, national_team_id: 6, market_value: 12 },
    { player_name: 'Arijanet Muric', position: 'Goalkeeper', team_id: 6, national_team_id: null, market_value: 12 },
    { player_name: 'Anass Zaroury', position: 'Left Winger', team_id: 6, national_team_id: null, market_value: 12 },
    { player_name: 'Nathan Redmon', position: 'Right Winger', team_id: 6, national_team_id: null, market_value: 10 },
    { player_name: 'Zeki Amdouni', position: 'Centre Forward', team_id: 6, national_team_id: null, market_value: 10 },
    { player_name: 'Lyle Foster', position: 'Centre Forward', team_id: 6, national_team_id: null, market_value: 9 }, 
  ]);
};

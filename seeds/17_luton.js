/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Ryan Giles', position: 'Left Back', team_id: 12, national_team_id: null, market_value: 9 },
    { player_name: 'Issa Kabore', position: 'Right Back', team_id: 12, national_team_id: null, market_value: 7 },
    { player_name: 'Carlton Morris', position: 'Centre Forward', team_id: 12, national_team_id: null, market_value: 6 },
    { player_name: 'Elijah Adebayo', position: 'Centre Forward', team_id: 12, national_team_id: null, market_value: 6 },
    { player_name: 'Marvelous Nakamba', position: 'Defensive Midfield', team_id: 12, national_team_id: null, market_value: 4 },
    { player_name: 'Tahith Chong', position: 'Right Winger', team_id: 12, national_team_id: null, market_value: 3 },
    { player_name: 'Tom Lockyer', position: 'Centre Back', team_id: 12, national_team_id: null, market_value: 3 },
    { player_name: 'Allan Campbell', position: 'Central Midfield', team_id: 12, national_team_id: null, market_value: 3 },
    { player_name: 'Alfie Doughty', position: 'Left Midfield', team_id: 12, national_team_id: null, market_value: 2 },
    { player_name: 'Mads Andersen', position: 'Centre Back', team_id: 12, national_team_id: null, market_value: 2 }, 
  ]);
};

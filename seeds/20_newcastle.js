/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Alexander Isak', position: 'Centre Forward', team_id: 15, national_team_id: null, market_value: 70 },
    { player_name: 'Bruno Guimaraes', position: 'Defensive Midfield', team_id: 15, national_team_id: 2, market_value: 70 },
    { player_name: 'Sandro Tonali', position: 'Defensive Midfield', team_id: 15, national_team_id: 7, market_value: 50 },
    { player_name: 'Sven Botman', position: 'Centre Back', team_id: 15, national_team_id: 6, market_value: 45 },
    { player_name: 'Joelinton', position: 'Attacking Midfield', team_id: 15, national_team_id: 2, market_value: 42 },
    { player_name: 'Joe Willock', position: 'Central Midfield', team_id: 15, national_team_id: null, market_value: 38 },
    { player_name: 'Anthony Gordon', position: 'Left Winger', team_id: 15, national_team_id: null, market_value: 38 },
    { player_name: 'Harvey Barnes', position: 'Left Winger', team_id: 15, national_team_id: null, market_value: 35 },
    { player_name: 'Miguel Almiron', position: 'Right Winger', team_id: 15, national_team_id: null, market_value: 32 },
    { player_name: 'Sean Longstaff', position: 'Central Midfield', team_id: 15, national_team_id: null, market_value: 25 }, 
  ]);
};
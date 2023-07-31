/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Harry Kane', position: 'Centre Forward', team_id: 18, national_team_id: 1, market_value: 90 },
    { player_name: 'James Maddison', position: 'Attacking Midfield', team_id: 18, national_team_id: 1, market_value: 60 },
    { player_name: 'Cristian Romero', position: 'Centre Back', team_id: 18, national_team_id: 4, market_value: 60 },
    { player_name: 'Heung-min Son', position: 'Left Winger', team_id: 18, national_team_id: null, market_value: 50 },
    { player_name: 'Dejan Kulusevski', position: 'Right Winger', team_id: 18, national_team_id: null, market_value: 50 },
    { player_name: 'Richarlison', position: 'Centre Forward', team_id: 18, national_team_id: 2, market_value: 48 },
    { player_name: 'Pierre-Emile Hojbjerg', position: 'Central Midfield', team_id: 18, national_team_id: null, market_value: 45 },
    { player_name: 'Rodrigo Bentancur', position: 'Central Midfield', team_id: 18, national_team_id: null, market_value: 40 },
    { player_name: 'Pedro Porro', position: 'Right Back', team_id: 18, national_team_id: 9, market_value: 40 },
    { player_name: 'Destiny Udogie', position: 'Left Back', team_id: 18, national_team_id: 7, market_value: 25 }, 
  ]);
};
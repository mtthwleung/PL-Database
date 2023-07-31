/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('players').insert([
    { player_name: 'Matheus Nunes', position: 'Central Midfield', team_id: 19, national_team_id: 8, market_value: 45 },
    { player_name: 'Max Kilman', position: 'Centre Back', team_id: 19, national_team_id: null, market_value: 30 },
    { player_name: 'Pedro Neto', position: 'Right Winger', team_id: 19, national_team_id: 8, market_value: 28 },
    { player_name: 'Matheus Cunha', position: 'Centre Forward', team_id: 19, national_team_id: null, market_value: 25 },
    { player_name: 'Goncalo Guedes', position: 'Left Winger', team_id: 19, national_team_id: 8, market_value: 23 },
    { player_name: 'Rayan Ait-Nouri', position: 'Left Back', team_id: 19, national_team_id: null, market_value: 22 },
    { player_name: 'Daniel Podence', position: 'Left Winger', team_id: 19, national_team_id: 8, market_value: 20 },
    { player_name: 'Jose Sa', position: 'Goalkeeper', team_id: 19, national_team_id: 8, market_value: 18 },
    { player_name: 'Joao Gomes', position: 'Central Midfield', team_id: 19, national_team_id: null, market_value: 18 },
    { player_name: 'Nelson Semedo', position: 'Right Back', team_id: 19, national_team_id: 8, market_value: 15 }, 
  ]);
};
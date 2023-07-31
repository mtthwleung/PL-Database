/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Eberichi Eze', position: 'Attacking Midfield', team_id: 8, national_team_id: 1, market_value: 40 },
    { player_name: 'Michael Olise', position: 'Right Winger', team_id: 8, national_team_id: null, market_value: 38 },
    { player_name: 'Marc Guehi', position: 'Centre Back', team_id: 8, national_team_id: 1, market_value: 35 },
    { player_name: 'Cheick Doucoure', position: 'Defensive Midfield', team_id: 8, national_team_id: null, market_value: 35 },
    { player_name: 'Joachim Andersen', position: 'Centre Back', team_id: 8, national_team_id: null, market_value: 30 },
    { player_name: 'Tyrick Mitchell', position: 'Left Back', team_id: 8, national_team_id: 1, market_value: 22 },
    { player_name: 'Jefferson Lerma', position: 'Defensive Midfield', team_id: 8, national_team_id: null, market_value: 20 },
    { player_name: 'Odsonne Edouard', position: 'Centre Forward', team_id: 8, national_team_id: null, market_value: 15 },
    { player_name: 'Naouirou Ahamada', position: 'Central Midfield', team_id: 8, national_team_id: null, market_value: 10 },
    { player_name: 'Chris Richards', position: 'Centre Back', team_id: 8, national_team_id: null, market_value: 10 }, 
  ]);
};

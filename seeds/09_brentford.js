/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Ivan Toney', position: 'Centre Forward', team_id: 4, national_team_id: null, market_value: 35 },
    { player_name: 'Bryan Mbuemo', position: 'Right Winger', team_id: 4, national_team_id: null, market_value: 35 },
    { player_name: 'David Raya', position: 'Goalkeeper', team_id: 4, national_team_id: 9, market_value: 30 },
    { player_name: 'Rico Henry', position: 'Left Back', team_id: 4, national_team_id: null, market_value: 28 },
    { player_name: 'Kevin Schade', position: 'Right Winger', team_id: 4, national_team_id: null, market_value: 25 },
    { player_name: 'Aaron Hickey', position: 'Right Back', team_id: 4, national_team_id: null, market_value: 25 },
    { player_name: 'Mathias Jensen', position: 'Central Midfield', team_id: 4, national_team_id: null, market_value: 22 },
    { player_name: 'Nathan Collins', position: 'Centre Back', team_id: 4, national_team_id: null, market_value: 22 },
    { player_name: 'Vitaly Janelt', position: 'Defensive Midfield', team_id: 4, national_team_id: null, market_value: 20 },
    { player_name: 'Yoane Wissa', position: 'Left Winger', team_id: 4, national_team_id: null, market_value: 18 }, 
  ]);
};

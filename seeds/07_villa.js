/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Moussa Diaby', position: 'Right Winger', team_id: 2, national_team_id: 3, market_value: 50 },
    { player_name: 'Pau Torres', position: 'Centre Back', team_id: 2, national_team_id: 9, market_value: 45 },
    { player_name: 'Jacob Ramsey', position: 'Central Midfield', team_id: 2, national_team_id: null, market_value: 42 },
    { player_name: 'Ollie Watkins', position: 'Centre Forward', team_id: 2, national_team_id: null, market_value: 40 },
    { player_name: 'Douglas Luiz', position: 'Central Midfield', team_id: 2, national_team_id: 2, market_value: 40 },
    { player_name: 'Boubacar Kamara', position: 'Defensive Midfield', team_id: 2, national_team_id: 3, market_value: 30 },
    { player_name: 'Emiliano Martinez', position: 'Goalkeeper', team_id: 2, national_team_id: 4, market_value: 28 },
    { player_name: 'Emiliano Buendia', position: 'Right Winger', team_id: 2, national_team_id: null, market_value: 28 },
    { player_name: 'John McGinn', position: 'Central Midfield', team_id: 2, national_team_id: null, market_value: 27 },
    { player_name: 'Youri Tielemans', position: 'Central Midfield', team_id: 2, national_team_id: 5, market_value: 25 }, 
  ]);
};

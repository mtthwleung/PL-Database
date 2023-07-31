/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Amadou Onana', position: 'Defensive Midfield', team_id: 9, national_team_id: 5, market_value: 45 },
    { player_name: 'Alex Iwobi', position: 'Attacking Midfield', team_id: 9, national_team_id: null, market_value: 28 },
    { player_name: 'Dominic Calvert-Lewin', position: 'Centre Forward', team_id: 9, national_team_id: null, market_value: 25 },
    { player_name: 'Arnaut Danjuma', position: 'Left Winger', team_id: 9, national_team_id: 6, market_value: 25 },
    { player_name: 'Vitaliy Mykolenko', position: 'Left Back', team_id: 9, national_team_id: null, market_value: 25 },
    { player_name: 'Jordan Pickford', position: 'Goalkeeper', team_id: 9, national_team_id: 1, market_value: 22 },
    { player_name: 'Demarai Gray', position: 'Left Winger', team_id: 9, national_team_id: null, market_value: 20 },
    { player_name: 'Dwight McNeil', position: 'Left Winger', team_id: 9, national_team_id: null, market_value: 20 },
    { player_name: 'James Tarkowski', position: 'Centre Back', team_id: 9, national_team_id: null, market_value: 18 },
    { player_name: 'Andre Gomes', position: 'Central Midfield', team_id: 9, national_team_id: 8, market_value: 16 }, 
  ]);
};

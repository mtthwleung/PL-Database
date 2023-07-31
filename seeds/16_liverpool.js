/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Luis Diaz', position: 'Left Winger', team_id: 11, national_team_id: null, market_value: 75 },
    { player_name: 'Mohamed Salah', position: 'Right Winger', team_id: 11, national_team_id: null, market_value: 65 },
    { player_name: 'Trent Alexander-Arnold', position: 'Right Back', team_id: 11, national_team_id: 1, market_value: 65 },
    { player_name: 'Alexis Mac Allister', position: 'Attacking Midfield', team_id: 11, national_team_id: 4, market_value: 65 },
    { player_name: 'Darwin Nunez', position: 'Centre Forward', team_id: 11, national_team_id: null, market_value: 65 },
    { player_name: 'Cody Gakpo', position: 'Left Winger', team_id: 11, national_team_id: 6, market_value: 55 },
    { player_name: 'Diogo Jota', position: 'Left Winger', team_id: 11, national_team_id: 8, market_value: 50 },
    { player_name: 'Dominik Szoboszlai', position: 'Attacking Midfield', team_id: 11, national_team_id: null, market_value: 50 },
    { player_name: 'Andrew Robertson', position: 'Left Back', team_id: 11, national_team_id: null, market_value: 40 },
    { player_name: 'Alisson', position: 'Goalkeeper', team_id: 11, national_team_id: 2, market_value: 35 }, 
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('players').del()
  await knex('players').insert([
    { player_name: 'Bukayo Saka', position: 'Right Winger', team_id: 1, national_team_id: 1, market_value: 120 },
    { player_name: 'Martin Odegaard', position: 'Attacking Midfield', team_id: 1, national_team_id: null, market_value: 90 },
    { player_name: 'Declan Rice', position: 'Defensive Midfield', team_id: 1, national_team_id: 1, market_value: 90 },
    { player_name: 'Gabriel Martinelli', position: 'Left Winger', team_id: 1, national_team_id: 2, market_value: 80 },
    { player_name: 'Gabriel Jesus', position: 'Centre Forward', team_id: 1, national_team_id: 2, market_value: 75 },
    { player_name: 'William Saliba', position: 'Centre Back', team_id: 1, national_team_id: 3, market_value: 65 },
    { player_name: 'Kai Havertz', position: 'Attacking Midfield', team_id: 1, national_team_id: 10, market_value: 55 },
    { player_name: 'Ben White', position: 'Right Back', team_id: 1, national_team_id: 1, market_value: 55 },
    { player_name: 'Gabriel Magalhaes', position: 'Centre Back', team_id: 2, national_team_id: null, market_value: 55 },
    { player_name: 'Oleksandr Zinchenko', position: 'Left Back', team_id: 1, national_team_id: null, market_value: 42 }, 
  ]);
};

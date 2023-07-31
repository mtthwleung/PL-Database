/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Moises Caicedo', position: 'Defensive Midfield', team_id: 5, national_team_id: null, market_value: 75 },
    { player_name: 'Pervis Estupinan', position: 'Left Back', team_id: 5, national_team_id: null, market_value: 32 },
    { player_name: 'Kaoru Mitoma', position: 'Left Winger', team_id: 5, national_team_id: null, market_value: 32 },
    { player_name: 'Joao Pedro', position: 'Centre Forward', team_id: 5, national_team_id: null, market_value: 32 },
    { player_name: 'Evan Ferguson', position: 'Centre Forward', team_id: 5, national_team_id: null, market_value: 30 },
    { player_name: 'Adam Webster', position: 'Centre Back', team_id: 5, national_team_id: null, market_value: 25 },
    { player_name: 'Robert Sanchez', position: 'Goalkeeper', team_id: 5, national_team_id: null, market_value: 22 },
    { player_name: 'Joel Veltman', position: 'Right Back', team_id: 5, national_team_id: 6, market_value: 10 },
    { player_name: 'James Milner', position: 'Central Midfield', team_id: 5, national_team_id: null, market_value: 2 },
    { player_name: 'Adam Lallana', position: 'Attacking Midfield', team_id: 5, national_team_id: null, market_value: 1 }, 
  ]);
};

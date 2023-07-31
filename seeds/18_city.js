/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Erling Haaland', position: 'Centre Forward', team_id: 13, national_team_id: null, market_value: 180 },
    { player_name: 'Phil Foden', position: 'Left Winger', team_id: 13, national_team_id: 1, market_value: 110 },
    { player_name: 'Rodri', position: 'Defensive Midfield', team_id: 13, national_team_id: 9, market_value: 90 },
    { player_name: 'Bernardo Silva', position: 'Attacking Midfield', team_id: 13, national_team_id: 8, market_value: 80 },
    { player_name: 'Ruben Dias', position: 'Centre Back', team_id: 13, national_team_id: 8, market_value: 80 },
    { player_name: 'Jack Grealish', position: 'Left Winger', team_id: 13, national_team_id: 1, market_value: 75 },
    { player_name: 'Kevin De Bruyne', position: 'Attacking Midfield', team_id: 13, national_team_id: 8, market_value: 70 },
    { player_name: 'Julian Alvarez', position: 'Centre Forward', team_id: 13, national_team_id: 4, market_value: 60 },
    { player_name: 'Joao Cancelo', position: 'Right Back', team_id: 13, national_team_id: 8, market_value: 50 },
    { player_name: 'Nathan Ake', position: 'Centre Back', team_id: 13, national_team_id: 6, market_value: 42 }, 
  ]);
};
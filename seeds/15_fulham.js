/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Joao Palhinha', position: 'Defensive Midfield', team_id: 10, national_team_id: 8, market_value: 40 },
    { player_name: 'Aleksandar Mitrovic', position: 'Centre Forward', team_id: 10, national_team_id: null, market_value: 28 },
    { player_name: 'Andreas Pereira', position: 'Attacking Midfield', team_id: 10, national_team_id: 2, market_value: 27 },
    { player_name: 'Harrison Reed', position: 'Central Midfield', team_id: 10, national_team_id: null, market_value: 18 },
    { player_name: 'Issa Diop', position: 'Centre Back', team_id: 10, national_team_id: null, market_value: 18 },
    { player_name: 'Tosin Adarabiozo', position: 'Centre Back', team_id: 10, national_team_id: null, market_value: 16 },
    { player_name: 'Harry Wilson', position: 'Right Winger', team_id: 10, national_team_id: null, market_value: 16 },
    { player_name: 'Kenny Tete', position: 'Right Back', team_id: 10, national_team_id: 6, market_value: 15 },
    { player_name: 'Antonee Robinson', position: 'Left Back', team_id: 10, national_team_id: null, market_value: 15 },
    { player_name: 'Bernd Leno', position: 'Goalkeeper', team_id: 10, national_team_id: 10, market_value: 12 }, 
  ]);
};

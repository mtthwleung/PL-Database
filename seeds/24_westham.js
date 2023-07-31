/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Lucas Paqueta', position: 'Attacking Midfield', team_id: 19, national_team_id: 2, market_value: 45 },
    { player_name: 'Jarrod Bowen', position: 'Right Winger', team_id: 19, national_team_id: 1, market_value: 38 },
    { player_name: 'Tomas Soucek', position: 'Defensive Midfield', team_id: 19, national_team_id: null, market_value: 35 },
    { player_name: 'Nayef Aguerd', position: 'Centre Back', team_id: 19, national_team_id: null, market_value: 35 },
    { player_name: 'Said Benrahma', position: 'Left Winger', team_id: 19, national_team_id: null, market_value: 25 },
    { player_name: 'Kurt Zouma', position: 'Centre Back', team_id: 19, national_team_id: null, market_value: 22 },
    { player_name: 'Gianluca Scamacca', position: 'Centre Forward', team_id: 19, national_team_id: 7, market_value: 22 },
    { player_name: 'Pablo Fornals', position: 'Attacking Midfield', team_id: 19, national_team_id: 9, market_value: 22 },
    { player_name: 'Thilo Kehrer', position: 'Centre Back', team_id: 19, national_team_id: 10, market_value: 18 },
    { player_name: 'Nikola Vlasic', position: 'Attacking Midfield', team_id: 19, national_team_id: null, market_value: 17 }, 
  ]);
};
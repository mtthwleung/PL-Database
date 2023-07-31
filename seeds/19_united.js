/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Marcus Rashford', position: 'Left Winger', team_id: 14, national_team_id: 1, market_value: 80 },
    { player_name: 'Bruno Fernandes', position: 'Attacking Midfield', team_id: 14, national_team_id: 8, market_value: 75 },
    { player_name: 'Mason Mount', position: 'Attacking Midfield', team_id: 14, national_team_id: 1, market_value: 60 },
    { player_name: 'Antony', position: 'Right Winger', team_id: 14, national_team_id: 2, market_value: 60 },
    { player_name: 'Lisandro Martinez', position: 'Centre Back', team_id: 14, national_team_id: 4, market_value: 50 },
    { player_name: 'Jadon Sancho', position: 'Left Winger', team_id: 14, national_team_id: 1, market_value: 45 },
    { player_name: 'Luke Shaw', position: 'Left Back', team_id: 14, national_team_id: 1, market_value: 42 },
    { player_name: 'Casemiro', position: 'Defensive Midfield', team_id: 14, national_team_id: 2, market_value: 40 },
    { player_name: 'Diogo Dalot', position: 'Right Back', team_id: 14, national_team_id: 8, market_value: 40 },
    { player_name: 'Raphael Varane', position: 'Centre Back', team_id: 14, national_team_id: 3, market_value: 35 }, 
  ]);
};
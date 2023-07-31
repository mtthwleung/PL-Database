/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Christopher Nkunku', position: 'Second Striker', team_id: 7, national_team_id: 3, market_value: 80 },
    { player_name: 'Enzo Fernandez', position: 'Defensive Midfield', team_id: 7, national_team_id: 4, market_value: 80 },
    { player_name: 'Reece James', position: 'Right Back', team_id: 7, national_team_id: 1, market_value: 65 },
    { player_name: 'Raheem Sterling', position: 'Left Wing', team_id: 7, national_team_id: 1, market_value: 55 },
    { player_name: 'Wesley Fofana', position: 'Centre Back', team_id: 7, national_team_id: 3, market_value: 55 },
    { player_name: 'Mykhaylo Mudryk', position: 'Left Winger', team_id: 7, national_team_id: null, market_value: 50 },
    { player_name: 'Romelu Lukaku', position: 'Centre Forward', team_id: 7, national_team_id: 5, market_value: 40 },
    { player_name: 'Benoit Badiashile', position: 'Centre Back', team_id: 7, national_team_id: 3, market_value: 40 },
    { player_name: 'Marc Cucurella', position: 'Left Back', team_id: 7, national_team_id: 9, market_value: 35 },
    { player_name: 'Thiago Silva', position: 'Centre Back', team_id: 7, national_team_id: 2, market_value: 2 }, 
  ]);
};

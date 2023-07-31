/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Morgan Gibbs-White', position: 'Attacking Midfield', team_id: 16, national_team_id: null, market_value: 40 },
    { player_name: 'Brennan Johnson', position: 'Attacking Midfield', team_id: 16, national_team_id: null, market_value: 38 },
    { player_name: 'Danilo', position: 'Defensive Midfield', team_id: 16, national_team_id: null, market_value: 28 },
    { player_name: 'Taiwo Awoniyi', position: 'Centre Forward', team_id: 16, national_team_id: null, market_value: 25 },
    { player_name: 'Neco Williams', position: 'Right Back', team_id: 16, national_team_id: null, market_value: 20 },
    { player_name: 'Moussa Niakhate', position: 'Centre Back', team_id: 16, national_team_id: null, market_value: 18 },
    { player_name: 'Anthony Elanga', position: 'Left Winger', team_id: 16, national_team_id: null, market_value: 18 },
    { player_name: 'Orel Mangala', position: 'Central Midfield', team_id: 16, national_team_id: 5, market_value: 16 },
    { player_name: 'Joe Worrall', position: 'Centre Back', team_id: 16, national_team_id: null, market_value: 12 },
    { player_name: 'Ryan Yates', position: 'Central Midfield', team_id: 16, national_team_id: null, market_value: 11 }, 
  ]);
};

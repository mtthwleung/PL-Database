/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Dango Ouattara', position: 'Right Winger', team_id: 3, national_team_id: null, market_value: 25 },
    { player_name: 'Hamed Junior Traore', position: 'Attacking Midfield', team_id: 3, national_team_id: null, market_value: 22 },
    { player_name: 'Marco Senesi', position: 'Centre Back', team_id: 3, national_team_id: 4, market_value: 22 },
    { player_name: 'Dominic Solanke', position: 'Centre Forward', team_id: 3, national_team_id: null, market_value: 20 },
    { player_name: 'Philip Billing', position: 'Central Midfield', team_id: 3, national_team_id: null, market_value: 20 },
    { player_name: 'Ilya Zabarnyi', position: 'Centre Back', team_id: 3, national_team_id: null, market_value: 20 },
    { player_name: 'Lloyd Kelly', position: 'Centre Back', team_id: 3, national_team_id: null, market_value: 18 },
    { player_name: 'Marcus Tavernier', position: 'Left Midfield', team_id: 3, national_team_id: null, market_value: 17 },
    { player_name: 'Milos Kerkez', position: 'Left Back', team_id: 3, national_team_id: null, market_value: 15 },
    { player_name: 'Justin Kluivert', position: 'Left Winger', team_id: 3, national_team_id: 6, market_value: 14 }, 
  ]);
};

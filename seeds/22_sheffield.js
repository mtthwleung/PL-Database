/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('players').insert([
    { player_name: 'Sander Berge', position: 'Defensive Midfield', team_id: 17, national_team_id: null, market_value: 20 },
    { player_name: 'Anel Ahmedhodzic', position: 'Centre Back', team_id: 17, national_team_id: null, market_value: 20 },
    { player_name: 'Iliman Ndiaye', position: 'Centre Forward', team_id: 17, national_team_id: null, market_value: 18 },
    { player_name: 'John Egan', position: 'Centre Back', team_id: 17, national_team_id: null, market_value: 6 },
    { player_name: 'Oliver McBurnie', position: 'Centre Forward', team_id: 17, national_team_id: null, market_value: 5 },
    { player_name: 'Rhian Brewster', position: 'Centre Forward', team_id: 17, national_team_id: null, market_value: 4 },
    { player_name: 'Jayden Bogle', position: 'Right Back', team_id: 17, national_team_id: null, market_value: 4 },
    { player_name: 'George Baldock', position: 'Right Midfield', team_id: 17, national_team_id: null, market_value: 4 },
    { player_name: 'Yasser Larouci', position: 'Left Back', team_id: 17, national_team_id: null, market_value: 4 },
    { player_name: 'Benie Traore', position: 'Centre Forward', team_id: 17, national_team_id: null, market_value: 4 }, 
  ]);
};

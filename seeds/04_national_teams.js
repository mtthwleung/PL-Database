/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('national_teams').del()
  await knex('national_teams').insert([
    { stadium_id: 21, country: 'England', world_cup_wins: 1, most_appearances: 'Peter Shilton', most_goals: 'Harry Kane' },
    { stadium_id: 22, country: 'Brazil', world_cup_wins: 5, most_appearances: 'Cafu', most_goals: 'Pele/Neymar' },
    { stadium_id: 23, country: 'France', world_cup_wins: 2, most_appearances: 'Hugo Lloris', most_goals: 'Olivier Giroud' },
    { stadium_id: 24, country: 'Argentina', world_cup_wins: 3, most_appearances: 'Lionel Messi', most_goals: 'Lionel Messi' },
    { stadium_id: 25, country: 'Belgium', world_cup_wins: 0, most_appearances: 'Jan Vertonghen', most_goals: 'Romelu Lukaku' },
    { stadium_id: 26, country: 'Netherlands', world_cup_wins: 0, most_appearances: 'Wesley Sneijder', most_goals: 'Robin van Persie' },
    { stadium_id: 27, country: 'Italy', world_cup_wins: 4, most_appearances: 'Gianluigi Buffon', most_goals: 'Gigi Riva' },
    { stadium_id: 28, country: 'Portugal', world_cup_wins: 0, most_appearances: 'Cristiano Ronaldo', most_goals: 'Cristiano Ronaldo' },
    { stadium_id: 29, country: 'Spain', world_cup_wins: 1, most_appearances: 'Sergio Ramos', most_goals: 'David Villa' },
    { stadium_id: 30, country: 'Germany', world_cup_wins: 4, most_appearances: 'Lothar Matthaus', most_goals: 'Miroslav Klose' }, 
  ]);
};

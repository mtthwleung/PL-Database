/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('players', table => {
        table.increments();
        table.string('player_name').notNullable();
        table.string('position').notNullable();
        table.integer('team_id').notNullable();
        table.foreign('team_id').references('teams.id');
        table.integer('national_team_id');
        table.foreign('national_team_id').references('national_teams.id');
        table.integer('market_value');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('players');
};

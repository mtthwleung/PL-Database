/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('national_teams', table => {
        table.increments();
        table.integer('stadium_id').notNullable();
        table.foreign('stadium_id').references('stadiums.id');
        table.string('country').notNullable();
        table.integer('world_cup_wins').unsigned();
        table.string('most_appearances').notNullable();
        table.string('most_goals').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('national_teams')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('managers', table => {
        table.increments();
        table.string('manager_name').notNullable();
        table.integer('team_id');
        table.foreign('team_id').references('teams.id');
        table.integer('national_team_id');
        table.foreign('national_team_id').references('national_teams.id');
        table.string('manager_nationality').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('managers');
};

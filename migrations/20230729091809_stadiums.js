/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('stadiums', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('opened').notNullable();
        table.integer('capacity').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stadiums')
};

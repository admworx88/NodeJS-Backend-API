/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Users', function (t) {
    t.increments('id').primary();
    t.string('first_name', 50);
    t.string('last_name', 50);
    t.string('address', 100);
    t.string('post_code', 10);
    t.string('phone_number', 20);
    t.string('email', 100);
    t.string('username', 15);
    t.string('password', 15);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};

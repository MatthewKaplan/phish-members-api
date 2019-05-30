
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) => {
    table.increments('id');
    table.varchar('member');
    table.varchar('date_of_birth');
    table.varchar('born');
    table.varchar('side_projects');
    table.text('image');
    table.varchar('also_known_as');
    table.varchar('instruments');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member');
};

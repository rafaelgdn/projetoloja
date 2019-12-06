
exports.up = function (knex) {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary()
        table.string('cpf').unique()
        table.string('nome').notNull()
        table.string('email')
        table.string('telefone')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('clientes')
};

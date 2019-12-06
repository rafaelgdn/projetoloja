
exports.up = function (knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary()
        table.string('marca')
        table.string('modelo')
        table.string('defeito')
        table.string('serie')
        table.string('acessorios')
        table.integer('clienteId').references('id').inTable('clientes').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('produtos')
};


exports.up = function (knex) {
    return knex.schema.createTable('ordensDeServico', table => {
        table.increments('id').primary()
        table.string('numero')
        table.string('data')
        table.string('situacao')
        table.string('descricaoOrcamento')
        table.string('valorOrcamento')
        table.integer('clienteId').references('id').inTable('clientes').unsigned()
        table.integer('produtoId').references('id').inTable('produtos').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ordensDeServico')
};

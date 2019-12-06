
exports.up = function (knex) {
    return knex.schema.createTable('enderecos', table => {
        table.increments('id').primary()
        table.string('logradouro')
        table.string('numero')
        table.string('complemento')
        table.string('bairro')
        table.string('cidade')
        table.string('cep')
        table.string('uf')
        table.string('pais').defaultTo('Brasil')
        table.integer('clienteId').references('id').inTable('clientes').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('enderecos')
};

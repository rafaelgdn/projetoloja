// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
        database: 'projetoloja',
        user: 'root',
        password: 'rafa2404'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};

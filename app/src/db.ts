import knex, { Knex } from 'knex';

const db: Knex = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'arlink_user',
        password: 'arlink_user',
        database: 'arlink_db'
    },
    pool: { min: 2, max: 10 },
});

export default db;
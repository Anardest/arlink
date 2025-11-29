import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('urls', (table) => {
        table.bigIncrements('id').primary();  // BIGSERIAL PRIMARY KEY
        table.text('long_url').notNullable().unique();  // TEXT NOT NULL UNIQUE
        table.string('short_code', 16).notNullable().unique();  // VARCHAR(16) NOT NULL UNIQUE
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());  // TIMESTAMPTZ NOT NULL DEFAULT now()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('urls');
}


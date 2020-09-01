import Knex from 'knex';
/* Cria a tabela */
export async function up(knex: Knex) {
    return knex.schema.createTable('music_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('music_id')
            .notNullable()
            .references('id')
            .inTable('music')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

/* Deleta a tabela */
export async function down(knex: Knex){
    return knex.schema.dropTable ('music_schedule');
}
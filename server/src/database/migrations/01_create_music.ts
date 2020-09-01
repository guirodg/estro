import Knex from 'knex';
/* Cria a tabela */
export async function up(knex: Knex) {
    return knex.schema.createTable('music', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

/* Deleta a tabela */
export async function down(knex: Knex){
    return knex.schema.dropTable ('music');
}
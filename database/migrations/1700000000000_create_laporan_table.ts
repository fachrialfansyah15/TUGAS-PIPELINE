import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'laporan'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama_jalan', 255).notNullable()
      table.text('deskripsi').notNullable()
      table.string('koordinat', 255).notNullable()
      table.string('foto', 255).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

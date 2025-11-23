import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Laporan extends BaseModel {
  static table = 'laporan'

  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'nama_jalan', serializeAs: 'nama_jalan' })
  declare nama_jalan: string

  @column({ serializeAs: 'deskripsi' })
  declare deskripsi: string

  @column({ serializeAs: 'koordinat' })
  declare koordinat: string

  @column({ serializeAs: 'foto' })
  declare foto: string
}

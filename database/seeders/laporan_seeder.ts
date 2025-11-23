import Laporan from '#models/laporan'

export default class LaporanSeeder {
  public static developmentOnly = false

  public async run() {
    // seed minimal 1 data agar tes GET bisa berjalan
    await Laporan.create({
      nama_jalan: 'Jalan Mawar',
      deskripsi: 'Kerusakan berlubang',
      koordinat: '-0.741615, 119.898734',
      foto: 'sample.jpg',
    })
  }
}

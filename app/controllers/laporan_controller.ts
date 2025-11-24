import type { HttpContext } from '@adonisjs/core/http'
import Laporan from '#models/laporan'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'

export default class LaporansController {
  public async index({ response }: HttpContext) {
    const data = await Laporan.all()
    return response.json(data)
  }

  public async store({ request, response }: HttpContext) {
    const foto = request.file('foto', {
      size: '5mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif'],
    })

    let fotoName = ''
    if (foto) {
      fotoName = `${cuid()}.${foto.extname}`
      await foto.move(app.makePath('public/uploads'), {
        name: fotoName,
      })
    }

    const data = {
      nama_jalan: request.input('nama_jalan'),
      deskripsi: request.input('deskripsi'),
      koordinat: request.input('koordinat'),
      foto: fotoName,
    }

    const laporan = await Laporan.create(data)
    return response.status(201).json(laporan)
  }

  public async update({ params, request, response }: HttpContext) {
    const laporan = await Laporan.findOrFail(params.id)
    
    const foto = request.file('foto', {
      size: '5mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif'],
    })

    const data: any = {
      nama_jalan: request.input('nama_jalan'),
      deskripsi: request.input('deskripsi'),
      koordinat: request.input('koordinat'),
    }

    if (foto) {
      const fotoName = `${cuid()}.${foto.extname}`
      await foto.move(app.makePath('public/uploads'), {
        name: fotoName,
      })
      data.foto = fotoName
    }

    laporan.merge(data)
    await laporan.save()

    return response.json(laporan)
  }

  public async destroy({ params, response }: HttpContext) {
    const laporan = await Laporan.findOrFail(params.id)
    await laporan.delete()

    return response.json({ message: 'deleted' })
  }
}

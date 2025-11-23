import router from '@adonisjs/core/services/router'
const LaporansController = () => import('#controllers/laporan_controller')

router.get('/api/laporan', [LaporansController, 'index'])
router.post('/api/laporan', [LaporansController, 'store'])
router.put('/api/laporan/:id', [LaporansController, 'update'])
router.delete('/api/laporan/:id', [LaporansController, 'destroy'])

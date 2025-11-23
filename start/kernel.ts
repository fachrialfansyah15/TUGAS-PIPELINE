/*
|--------------------------------------------------------------------------
| HTTP Kernel
|--------------------------------------------------------------------------
|
| File ini untuk mendaftarkan middleware server dan router.
|
*/

import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

/**
 * Global Error Handler
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * Server middleware — selalu jalan untuk setiap request
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
  () => import('@adonisjs/static/static_middleware'),   // ⭐ STATIC FILES (public/)
])

/**
 * Router middleware — hanya untuk route yang terdaftar
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
])

/**
 * Named middleware collection
 */
export const middleware = router.named({})

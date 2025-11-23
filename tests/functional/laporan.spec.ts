import { test } from '@japa/runner'

// Basic functional test to ensure /api/laporan works

test('GET /api/laporan should return 200', async ({ client, assert }) => {
  const response = await client.get('/api/laporan')
  response.assertStatus(200)
  assert.isArray(response.body())
})

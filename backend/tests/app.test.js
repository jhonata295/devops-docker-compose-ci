const request = require('supertest')
const app = require('../server')

describe('API TESTS', () => {
  test('GET /health', async () => {
    const response = await request(app).get('/health')

    expect(response.statusCode).toBe(200)
  })

  test('GET /', async () => {
    const response = await request(app).get('/')

    expect(response.statusCode).toBe(200)
  })
})
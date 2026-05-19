const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()

app.use(cors())

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'pedidos',
  port: 5432
})

app.get('/', async (req, res) => {
  try {
    await pool.query('SELECT NOW()')

    res.json({
      message: 'API funcionando'
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})

app.listen(3000)
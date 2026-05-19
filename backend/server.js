const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()

app.use(cors())

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

app.get('/', async (req, res) => {
  try {
    await pool.query('SELECT NOW()')

    res.json({
      message: 'Backend conectado com PostgreSQL'
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
})

app.get('/health', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.listen(process.env.PORT || 3000)
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Carregando API...')

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch(() => {
        setMessage('Erro ao conectar API')
      })
  }, [])

  return (
    <div>
      <h1>Projeto DevOps</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default App
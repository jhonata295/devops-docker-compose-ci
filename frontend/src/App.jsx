import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Carregando...')

  useEffect(() => {
    axios
      .get('http://localhost:3000')
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch(() => {
        setMessage('Erro API')
      })
  }, [])

  return (
    <div>
      <h1>Frontend</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default App
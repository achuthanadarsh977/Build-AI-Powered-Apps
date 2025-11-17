import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')   // ✅ define state

  useEffect(() => {
    fetch('/api/hello')                        // ✅ correct URL
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, [])

  return <p className='font-bold p-4'>{message || 'Loading...'}</p>
}

export default App

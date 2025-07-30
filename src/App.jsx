import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Album from './components/Album'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Album></Album>
    </>
  )
}

export default App

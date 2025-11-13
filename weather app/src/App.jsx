import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex items-center justify-center'>
      <Weather/>
      <H1>Hii</H1>
      </div>
      
    </>
  )
}

export default App

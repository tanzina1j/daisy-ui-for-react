import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroBanner from './components/HeroBanner'
import DropdownNavbar from './components/DropdownNavbar'
import TableData from './components/TableData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DropdownNavbar/>
      <HeroBanner/>
      <TableData/>
    </>
  )
}

export default App

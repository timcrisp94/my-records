import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const [records, setRecords] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        Records
        <nav>
          <NavLink to='/'>Records</NavLink>
          <NavLink className='m-left' to='/add'>Add Record</NavLink>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default App
import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import AddRecord from './pages/AddRecord/AddRecord'

function App() {
  const [records, setRecords] = useState([])

  const handleAddRecord = newRecordData => {
    setRecords([...records, newRecordData])
  }

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
				<Routes>
	        <Route path='/add' element={<AddRecord 
          handleAddRecord={handleAddRecord}/>} />
				</Routes>
      </main>
    </div>
  )
}

export default App
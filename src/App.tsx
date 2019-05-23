import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import child components
import { Login } from './Components/Forms'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Route path='/' exact render={ () => {
          return <Login />
        } } />
      </div>
    </Router>
  )
}

export default App
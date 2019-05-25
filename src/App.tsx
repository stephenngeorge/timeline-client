import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// import utils
import { authUtils } from './utils'

// import child components
import { Nav } from './Components/Globals'
import { Login } from './Components/Forms'
import { Dashboard } from './Components/Pages'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Route path='/' exact render={ () => {
          const loggedIn = localStorage.getItem('token')
          return !!loggedIn ? <Redirect to='/dashboard' /> : <Login />
        } } />
        <Route path='/dashboard' render={ () => {
          return authUtils.protectRoute() ? <Dashboard /> : <Redirect to='/' />
        } } />
      </div>
    </Router>
  )
}

export default App
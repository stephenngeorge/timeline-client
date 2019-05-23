import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// import child components
import { Login } from './Components/Forms'
import { Dashboard } from './Components/Pages'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Route path='/' exact render={ () => {
          const loggedIn = localStorage.getItem('token')
          return !!loggedIn ? <Redirect to='/dashboard' /> : <Login />
        } } />
        <Route path='/dashboard' component={ Dashboard } />
      </div>
    </Router>
  )
}

export default App
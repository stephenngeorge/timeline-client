import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { AuthContext } from './store'

// import child components
import { Nav } from './Components/Globals'
import { Login } from './Components/Forms'
import { Dashboard } from './Components/Pages'

const App: React.FC = () => {
  const { authState } = useContext(AuthContext)

  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Route path='/' exact render={ () => {
          return authState.token.length > 0 ? <Redirect to='/dashboard' /> : <Login />
        } } />
        <Route path='/dashboard' render={ () => {
          return authState.token.length > 0 ? <Dashboard user={ authState.data } /> : <Redirect to='/' />
        } } />
      </div>
    </Router>
  )
}

export default App
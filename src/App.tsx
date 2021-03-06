import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { AuthContext } from './store'

// import child components
import { Layout } from './Components/Globals'
import { Dashboard, LandingPage, SignupPage, Timeline } from './Components/Pages'

const App: React.FC = () => {
  const { authState } = useContext(AuthContext)

  return (
    <Router>
      <Layout>
        
        <Route path='/' exact render={ () => {
          return !!localStorage.getItem('token') ? <Redirect to='/dashboard' /> : <LandingPage />
        } } />
        <Route path='/signup' component={ SignupPage } />
        <Route path='/dashboard' render={ () => {
          return !!localStorage.getItem('token') ? <Dashboard user={ authState.data } /> : <Redirect to='/' />
        } } />
        <Route path='/timeline/:id' component={ Timeline } />
      </Layout>
    </Router>
  )
}

export default App
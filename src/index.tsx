import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'

import { AuthContext, useAuthState } from './store'

import * as serviceWorker from './serviceWorker'

const AuthApp: React.FC = () => {
    const store = useAuthState()

    return (
        <AuthContext.Provider value={ store }>
            <App />
        </AuthContext.Provider>
    )
}

render(<AuthApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
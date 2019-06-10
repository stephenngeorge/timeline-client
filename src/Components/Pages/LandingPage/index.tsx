import './page.css'

import React from 'react'

// component imports
import About from './About'
import { LogoType } from '../../Globals'
import { Login } from '../../Forms'

const LandingPage: React.FC = () => {
    return (
        <div className='landing-page'>
            <About />
            <div className='login-wrapper'>
                <LogoType />
                <Login />
            </div>
        </div>
    )
}

export default LandingPage
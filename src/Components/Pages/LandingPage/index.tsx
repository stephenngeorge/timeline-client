import '../authpage.css'

import React from 'react'

// component imports
import { About, LogoType } from '../../Globals'
import { Login } from '../../Forms'

const LandingPage: React.FC = () => {
    return (
        <div className='auth-page'>
            <About />
            <div className='authform-wrapper'>
                <LogoType />
                <Login />
            </div>
        </div>
    )
}

export default LandingPage
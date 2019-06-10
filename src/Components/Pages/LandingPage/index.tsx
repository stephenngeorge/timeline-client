import './page.css'

import React from 'react'

// component imports
import { LogoType } from '../../Globals'
import { Login } from '../../Forms'

const LandingPage: React.FC = () => {
    return (
        <div className='landing-page'>
            <LogoType />
            <Login />
        </div>
    )
}

export default LandingPage
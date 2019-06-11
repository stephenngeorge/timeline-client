import '../authpage.css'

import React from 'react'

// component imports
import { Signup } from '../../Forms'
import { About, LogoType } from '../../Globals'

const SignupPage: React.FC = () => {
    return (
        <div className='auth-page'>
            <About />
            <div className='authform-wrapper'>
                <LogoType />
                <Signup />
            </div>
        </div>
    )
}

export default SignupPage
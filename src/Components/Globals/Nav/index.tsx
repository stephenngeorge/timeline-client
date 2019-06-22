import './nav.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, types } from '../../../store'

// component imports
import LogoMark from '../LogoMark'

const Nav: React.FC = () => {
    // access global state
    const { authState, dispatch } = useContext(AuthContext)

    // remove token from local storage & reset authState to empty template
    const handleLogout = (e: any) => {
        dispatch({
            type: types.LOGOUT
        })
    }
    return (
        <div>
            {
                // only show nav if user is logged in
                authState.token.length > 0 &&
                <ul className='nav'>
                    <li>
                        <Link to='/dashboard'>
                            <LogoMark />
                        </Link>
                    </li>
                    <div>
                        <li>
                            <button id='logout-button' onClick={ handleLogout }>
                                <Link to='/'>logout</Link>
                            </button>
                        </li>
                    </div>
                </ul>
            }
        </div>
    )
}

export default Nav
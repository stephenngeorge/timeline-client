import './nav.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, types } from '../../../store'

// component imports
import LogoMark from '../LogoMark'

const Nav: React.FC = () => {
    const { authState, dispatch } = useContext(AuthContext)

    const handleLogout = (e: any) => {
        dispatch({
            type: types.LOGOUT
        })
    }
    return (
        <div>
            {
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
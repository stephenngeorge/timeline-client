import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, types } from '../../store'

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
                <button onClick={ handleLogout }>
                    <Link to='/'>logout</Link>
                </button>
            }
        </div>
    )
}

export default Nav
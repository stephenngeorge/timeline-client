import './login.css'

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, types } from '../../../store'
import { authQueries } from '../../../queries'

// component imports
import { LogoType } from '../../Globals'

const LoginForm: React.FC = () => {

    const { dispatch } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const loginData = await authQueries.login(username, password)
        dispatch({
            type: types.LOGIN,
            payload: loginData
        })
    }

    return (
        <div className='landing-page'>
            <LogoType />

            <form className='form form-login' onSubmit={ async (e: any) => {
                e.preventDefault()
                await handleSubmit()
            } }>
                <div className='form-group'>
                    <input  type='text'
                            name='username'
                            id='username'
                            value={ username }
                            onChange={ (e: any) => setUsername(e.target.value) }
                    />
                    <label htmlFor='username'>username:</label>
                </div>

                <div className='form-group'>
                    <input  type='password'
                            name='password'
                            id='password'
                            value={ password }
                            onChange={ (e:any) => setPassword(e.target.value) }
                    />
                    <label htmlFor='password'>password:</label>
                </div>

                <button type='submit'>login</button>

                <Link to='/signup'>create account</Link>
            </form>
        </div>
    )
}

export default LoginForm
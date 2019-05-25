import React, { useContext, useState } from 'react'
import { AuthContext, types } from '../../../store'

import { authQueries } from '../../../queries'

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
        <form onSubmit={ async (e: any) => {
            e.preventDefault()
            handleSubmit()
            setUsername('')
            setPassword('')
        } }>
            <div className='form-group'>
                <label>username:</label>
                <input type='text' name='username' value={ username } onChange={ (e: any) => setUsername(e.target.value) } />
            </div>

            <div className='form-group'>
                <label>password:</label>
                <input type='password' name='password' value={ password } onChange={ (e:any) => setPassword(e.target.value) } />
            </div>

            <button type='submit'>login</button>
        </form>
    )
}

export default LoginForm
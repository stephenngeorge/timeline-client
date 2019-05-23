import React, { useContext } from 'react'
import { AuthContext } from '../../../store'

import { ILoginFormProps } from './interfaces'
import { authQueries } from '../../../queries'

const LoginFormFields: React.FC<ILoginFormProps> = props => {
    const {
        username,
        password,
        setUsername,
        setPassword
    } = props

    const { authState, dispatch } = useContext(AuthContext)

    const handleSubmit = async () => {
        const loginData = await authQueries.login(username, password)
        dispatch({
            type: "LOGIN",
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

export default LoginFormFields
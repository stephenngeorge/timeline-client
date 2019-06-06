import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'

// import queries
import { authQueries } from '../../../queries'

const Signup: React.FC<RouteComponentProps> = ({history}) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConf, setPasswordConf] = useState<string>('')
    const [error, setError] = useState<string>('')

    return (
        <form onSubmit={ async (e: any) => {
            e.preventDefault()
            if (passwordConf !== password) {
                return setError('passwords do not match')
            }
            else {
                await authQueries.signup(username, password)
                history.push(`/`)
            }
        }}>
            {
                error !== '' &&
                <p>{error}</p>
            }
            <div className='form-group'>
                <label>username:</label>
                <input  type='text'
                        name='username'
                        id='username'
                        value={ username }
                        onChange={ (e: any) => setUsername(e.target.value) }
                />
            </div>

            <div className='form-group'>
                <label>password:</label>
                <input  type='password'
                        name='password' 
                        id='password'
                        value={ password }
                        onChange={ (e: any) => setPassword(e.target.value) }
                />
            </div>

            <div className='form-group'>
                <label>confirm:</label>
                <input  type='password'
                        name='passwordConf'
                        id='passwordConf'
                        value={ passwordConf }
                        onChange={ (e: any) => setPasswordConf(e.target.value) }
                />
            </div>

            <button type='submit'>sign up</button>
        </form>
    )
}

export default Signup
import '../authform.css'
import '../button.css'

import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'

// import queries
import { authQueries } from '../../../queries'

const Signup: React.FC<RouteComponentProps> = ({history}) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConf, setPasswordConf] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    useEffect(() => {
        const usernameNode = document.querySelector('#username-node')
        const passwordNode = document.querySelector('#password-node')
        const passwordConfNode = document.querySelector('#passwordConf-node')

        if (usernameNode !== null && passwordNode !== null && passwordConfNode !== null) {
            username === '' ? usernameNode.classList.remove('complete') : usernameNode.classList.add('complete')
            password === '' ? passwordNode.classList.remove('complete') : passwordNode.classList.add('complete')
            passwordConf === '' || passwordConf !== password ? passwordConfNode.classList.remove('complete') : passwordConfNode.classList.add('complete')

            if (usernameNode.classList.contains('complete') && passwordNode.classList.contains('complete') && passwordConfNode.classList.contains('complete')) {
                setDisabled(false)
            }
            else setDisabled(true)
        }
    }, [username, password, passwordConf, disabled])

    return (
        <form className='form form-auth' onSubmit={ async (e: any) => {
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
                <input  type='text'
                        name='username'
                        id='username'
                        value={ username }
                        onChange={ (e: any) => setUsername(e.target.value) }
                />
                <label>username</label>
            </div>

            <div className='form-group'>
                <input  type='password'
                        name='password' 
                        id='password'
                        value={ password }
                        onChange={ (e: any) => setPassword(e.target.value) }
                />
                <label>password</label>
            </div>

            <div className='form-group'>
                <input  type='password'
                        name='passwordConf'
                        id='passwordConf'
                        value={ passwordConf }
                        onChange={ (e: any) => setPasswordConf(e.target.value) }
                />
                <label>confirm</label>
            </div>

            <div className='timeline-button'>
                <div className='button-node' id='username-node'></div>
                <div className='button-node' id='password-node'></div>
                <div className='button-node' id='passwordConf-node'></div>
                <button disabled={ disabled } type='submit'>sign up</button>
            </div>
        </form>
    )
}

export default Signup
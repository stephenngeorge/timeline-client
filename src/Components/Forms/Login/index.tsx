import '../authform.css'
import '../button.css'
import './loginbutton.css'
import './typography.css'

import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext, types } from '../../../store'
import { authQueries } from '../../../queries'

// asset imports
import { key_icon } from '../../../assets'

const LoginForm: React.FC = () => {

    const { dispatch } = useContext(AuthContext)
    // control form inputs & button disabled state
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    // handle form progress nodes
    useEffect(() => {
        // access .timeline-button nodes
        let usernameNode = document.querySelector('#username-node')
        let passwordNode = document.querySelector('#password-node')
        let loginButton = document.querySelector('#login-button')
        // check dom elements exist
        if (usernameNode !== null && passwordNode !== null && loginButton !== null) {
            username === '' ? usernameNode.classList.remove('complete') : usernameNode.classList.add('complete')
            password === '' ? passwordNode.classList.remove('complete') : passwordNode.classList.add('complete')
            // if form is complete, enable button
            if (usernameNode.classList.contains('complete') && passwordNode.classList.contains('complete')) {
                setDisabled(false)
            }
            else setDisabled(true)
        }
    }, [username, password]) // <-- effect will run every time username or password input is changed

    // submit form & set return data to global context
    const handleSubmit = async () => {
        const loginData = await authQueries.login(username, password)
        if (loginData.type === "ERROR") console.log('error', loginData.message)
        else {
            dispatch({
                type: types.LOGIN,
                payload: loginData
            })
        }
    }

    return (
        <form className='form form-auth' onSubmit={ async (e: any) => {
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
                <label htmlFor='username'>username</label>
            </div>

            <div className='form-group'>
                <input  type='password'
                        name='password'
                        id='password'
                        value={ password }
                        onChange={ (e:any) => setPassword(e.target.value) }
                />
                <label htmlFor='password'>password</label>
            </div>

            <div className='timeline-button'>
                <div className='button-node' id='username-node'></div>
                <div className='button-node' id='password-node'></div>
                <button disabled={ disabled } type='submit' id='login-button'>
                    <img src={ key_icon } alt='login' id='login-icon' />
                </button>
            </div>

            <Link to='/signup' id='signup-ref'>no account? sign up</Link>
        </form>
    )
}

export default LoginForm
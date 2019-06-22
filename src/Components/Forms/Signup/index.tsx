import '../authform.css'
import '../button.css'
import './signupbutton.css'

import React, { useState, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { signup_icon } from '../../../assets'

// import queries
import { authQueries } from '../../../queries'

const Signup: React.FC<RouteComponentProps> = ({history}) => {

    // control form inputs & button disabled state & error messages
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConf, setPasswordConf] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    // handle form progress nodes
    useEffect(() => {
        // access .timeline-button nodes
        const usernameNode = document.querySelector('#username-node')
        const passwordNode = document.querySelector('#password-node')
        const passwordConfNode = document.querySelector('#passwordConf-node')
        // check dom elements exist
        if (usernameNode !== null && passwordNode !== null && passwordConfNode !== null) {
            // add .complete class to every node whose corresponding input has value
            username === '' ? usernameNode.classList.remove('complete') : usernameNode.classList.add('complete')
            password === '' ? passwordNode.classList.remove('complete') : passwordNode.classList.add('complete')
            passwordConf === '' || passwordConf !== password ? passwordConfNode.classList.remove('complete') : passwordConfNode.classList.add('complete')
            // if all form fields are filled in, enable button
            if (usernameNode.classList.contains('complete') && passwordNode.classList.contains('complete') && passwordConfNode.classList.contains('complete')) {
                setDisabled(false)
            }
            else setDisabled(true)
        }
    }, [username, password, passwordConf, disabled]) // <-- effect will run every time form inputs are changed

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
                <label htmlFor='username'>username</label>
            </div>

            <div className='form-group'>
                <input  type='password'
                        name='password' 
                        id='password'
                        value={ password }
                        onChange={ (e: any) => setPassword(e.target.value) }
                />
                <label htmlFor='password'>password</label>
            </div>

            <div className='form-group'>
                <input  type='password'
                        name='passwordConf'
                        id='passwordConf'
                        value={ passwordConf }
                        onChange={ (e: any) => setPasswordConf(e.target.value) }
                />
                <label htmlFor='passwordConf'>confirm</label>
            </div>

            <div className='timeline-button'>
                <div className='button-node' id='username-node'></div>
                <div className='button-node' id='password-node'></div>
                <div className='button-node' id='passwordConf-node'></div>
                <button disabled={ disabled } type='submit' id='signup-button'>
                    <img src={ signup_icon } alt='signup' id='signup-icon' />
                </button>
            </div>
        </form>
    )
}
// components needs access to history for rerouting to login page on submission
export default withRouter(Signup)
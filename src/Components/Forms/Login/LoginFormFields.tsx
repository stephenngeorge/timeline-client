import React from 'react'

import { ILoginFormProps } from './interfaces'

const LoginFormFields: React.FC<ILoginFormProps> = ({username, password, setUsername, setPassword}) => {
    return (
        <form onSubmit={ (e: any) => {
            e.preventDefault()
            console.log(username, password)
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
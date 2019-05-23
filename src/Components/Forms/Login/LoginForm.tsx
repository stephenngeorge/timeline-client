import React, { useState } from 'react'

// import child components
import LoginFormFields from './LoginFormFields'

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <LoginFormFields username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
            />
}

export default LoginForm
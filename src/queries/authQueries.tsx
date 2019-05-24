import { url } from './config'

export const login = async (username: string, password: string): Promise<any> => {
    const loginData = await fetch(`${url}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    // parse response object
    const response = await loginData.json()
    // save token value to localstorage
    localStorage.setItem('token', response.token)
    
    return response
}
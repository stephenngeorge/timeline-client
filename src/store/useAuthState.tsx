import { useState } from 'react'

interface IAction {
    type: string,
    payload?: any
}

export default () => {
    const [authState, setAuthState] = useState({token: ''})

    const dispatch = (action: IAction) => {
        const { type, payload } = action

        switch(type) {
            case 'LOGIN':
                return setAuthState({...payload})
            default:
                return {...authState}
        }
    }

    return { authState, dispatch }
}
import { useState } from 'react'
import * as types from './types'

interface IAction {
    type: string,
    payload?: any
}

export default () => {
    const [authState, setAuthState] = useState({token: ''})

    const dispatch = (action: IAction) => {
        const { type, payload } = action

        switch(type) {
            case types.LOGIN:
                return setAuthState({...payload})
            case types.LOGOUT:
                localStorage.removeItem('token')
                return setAuthState({token: ''})
            default:
                return {...authState}
        }
    }

    return { authState, dispatch }
}
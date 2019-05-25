import { useState } from 'react'
import * as types from './types'

interface IAction {
    type: string,
    payload?: any
}

export default () => {
    const initialState = {
        token: '',
        data: {}
    }

    const [authState, setAuthState] = useState(initialState)

    const dispatch = (action: IAction) => {
        const { type, payload } = action

        switch(type) {
            case types.LOGIN:
                return setAuthState({...payload})
            case types.LOGOUT:
                return setAuthState(initialState)
            default:
                return {...authState}
        }
    }

    return { authState, dispatch }
}
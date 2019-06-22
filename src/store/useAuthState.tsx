import { useState } from 'react'
import * as types from './types'

import { IUser, IAction, IAuthState } from '../interfaces'

export default () => {
    const data: IUser = {
        username: '',
        _id: '',
        created_at: '',
        updated_at: '',
        timelines: []
    }

    const initialState: IAuthState = {
        token: '',
        data,
        message: '',
        type: ''
    }

    const [authState, setAuthState] = useState(initialState)

    const dispatch = (action: IAction) => {
        const { type, payload } = action

        switch(type) {
            case types.LOGIN:
                return setAuthState({...payload})
            case types.LOGOUT:
                localStorage.removeItem('token')
                return setAuthState(initialState)
            case types.ADD_TIMELINE:
                return setAuthState({...authState, data: {...authState.data, timelines: [...authState.data.timelines, payload]}})
            case types.ADD_NODE:
                return setAuthState({...authState})
            case types.REFRESH_TIMELINES:
                return setAuthState({...authState, data: {...authState.data, timelines: payload}})
            default:
                return {...authState}
        }
    }

    return { authState, dispatch }
}
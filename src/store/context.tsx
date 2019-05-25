import { createContext } from 'react'

import { IAuthState } from '../interfaces'
const authState: IAuthState = {
    type: '',
    message: '',
    token: '',
    data: {
        username: '',
        _id: '',
        created_at: '',
        updated_at: '',
        timelines: []
    }
}

export default createContext({authState, dispatch: (action: any) => {} })
import { createContext } from 'react'

export default createContext({ authState: { token: '' }, dispatch: (action: any) => {} })
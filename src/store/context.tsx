import { createContext } from 'react'

export default createContext({ authState: { token: '', data: {} }, dispatch: (action: any) => {} })
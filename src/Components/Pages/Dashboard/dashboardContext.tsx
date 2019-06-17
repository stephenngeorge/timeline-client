import { createContext, Dispatch, SetStateAction } from 'react'

interface IDashboardProps {
    dateTimeSelector: boolean
}

interface IDashboard {
    dashboardProps: IDashboardProps
    setDashboardProps: Dispatch<SetStateAction<IDashboardProps>>
}

const DashboardContext = createContext<IDashboard>({
    dashboardProps: {
        dateTimeSelector: false
    },
    setDashboardProps: () => {}
})

export default DashboardContext
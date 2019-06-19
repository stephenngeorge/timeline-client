import { createContext, Dispatch, SetStateAction } from 'react'

interface IDashboardProps {
    dateTimeSelector: boolean,
    focusTimelineId: string,
    focusTimelineTitle: string
}

interface IDashboard {
    dashboardProps: IDashboardProps
    setDashboardProps: Dispatch<SetStateAction<IDashboardProps>>
}

const DashboardContext = createContext<IDashboard>({
    dashboardProps: {
        dateTimeSelector: false,
        focusTimelineId: '',
        focusTimelineTitle: ''
    },
    setDashboardProps: () => {}
})

export default DashboardContext
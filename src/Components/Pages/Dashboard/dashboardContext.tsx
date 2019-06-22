import { createContext, Dispatch, SetStateAction } from 'react'

interface IDashboardProps {
    dateTimeSelector: boolean,
    addTimelineForm: boolean,
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
        addTimelineForm: false,
        focusTimelineId: '',
        focusTimelineTitle: ''
    },
    setDashboardProps: () => {}
})

export default DashboardContext
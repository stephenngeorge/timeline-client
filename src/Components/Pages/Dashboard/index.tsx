import React, { useState } from 'react'
import DashboardContext from './dashboardContext'

// import interfaces
import { IDashboardProps } from '../../../interfaces'

// component imports
import Profile from './Profile'
import { DateTimeSelector } from '../../Forms'

const Dashboard: React.FC<IDashboardProps> = ({user}) => {
    const initDashboard = {
        dateTimeSelector: false,
        addTimelineForm: false,
        focusTimelineId: '',
        focusTimelineTitle: ''
    }
    const [dashboardProps, setDashboardProps] = useState(initDashboard)

    // consume dashboard context (has props to control different form states)
    // all dashboard children can access & set these props
    return (
        <DashboardContext.Provider value={{
            dashboardProps,
            setDashboardProps
        }}>
            <div>
                <Profile { ...user } />
                <DateTimeSelector   timelineId={ dashboardProps.focusTimelineId || '' }
                                    timelineTitle={ dashboardProps.focusTimelineTitle || '' }
                />
            </div>
        </DashboardContext.Provider>
    )
}

export default Dashboard
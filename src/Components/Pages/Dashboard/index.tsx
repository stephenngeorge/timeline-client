import React, { useState } from 'react'
import DashboardContext from './dashboardContext'

// import interfaces
import { IDashboardProps } from '../../../interfaces'

// component imports
import Profile from './Profile'
import { DateTimeSelector } from '../../Forms'

const Dashboard: React.FC<IDashboardProps> = ({user}) => {
    const initDashboard = {
        dateTimeSelector: false
    }
    const [dashboardProps, setDashboardProps] = useState(initDashboard)

    return (
        <DashboardContext.Provider value={{
            dashboardProps,
            setDashboardProps
        }}>
            <div>
                <Profile { ...user } />
                {
                    dashboardProps.dateTimeSelector === true &&
                    <DateTimeSelector />
                }
            </div>
        </DashboardContext.Provider>
    )
}

export default Dashboard
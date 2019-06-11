import React from 'react'

// import interfaces
import { IDashboardProps } from '../../../interfaces'

// component imports
import Profile from './Profile'

const Dashboard: React.FC<IDashboardProps> = ({user}) => {
    return (
        <div>
            <Profile { ...user } />
        </div>
    )
}

export default Dashboard
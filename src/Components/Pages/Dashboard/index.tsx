import React from 'react'

// import child components
import TimelineThumbnails from './TimelineThumbnails'
import { AddTimeline } from '../../Forms'

// import interfaces
import { IDashboardProps } from '../../../interfaces'

const Dashboard: React.FC<IDashboardProps> = ({user}) => {
    console.log(user)
    return (
        <div>
            <h2>{ user.username }</h2>
            <AddTimeline />
            <TimelineThumbnails timelines={ user.timelines } />
        </div>
    )
}

export default Dashboard
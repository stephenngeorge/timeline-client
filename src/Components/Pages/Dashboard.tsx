import React from 'react'

// import interfaces
import { IDashboardProps } from '../../interfaces'

const Dashboard: React.FC<IDashboardProps> = ({user}) => {
    return (
        <div>
            <h2>{ user.username }</h2>
        </div>
    )
}

export default Dashboard
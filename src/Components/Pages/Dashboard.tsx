import React from 'react'

interface IDashboardProps {
    user: object
}

const Dashboard: React.FC<IDashboardProps> = props => {
    console.log(props)
    return (
        <div>DASHBOARD</div>
    )
}

export default Dashboard
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { timelineQueries } from '../../../queries'

interface IParams { timelineId: string }
const Timeline: React.FC<RouteComponentProps<IParams>> = (props) => {
    const [timeline, setTimeline] = useState({})

    const fetchTimeline = async (timelineId: string) => {
        const fetchedTimeline = await timelineQueries.fetchTimeline(timelineId)
        setTimeline(fetchedTimeline)
    }
    useEffect(() => {
        fetchTimeline(props.match.params.timelineId)
    }, [])

    return (
        <div></div>
    )
}

export default Timeline
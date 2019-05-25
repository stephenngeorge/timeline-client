import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { timelineQueries } from '../../../queries'
import { ITimeline } from '../../../interfaces'

interface IParams { id: string }
const Timeline: React.FC<RouteComponentProps<IParams>> = (props) => {
    // create blank object to pass to useState
    const initialState = {
        title: '',
        _id: '',
        description: '',
        nodes: [],
        updated_at: '',
        created_at: '',
        tags: [],
        author: '',
        members: []
    }
    const [timeline, setTimeline] = useState<ITimeline>(initialState)

    // get timeline on component mount from params.timelineId
    const fetchTimeline = async (timelineId: string) => {
        const fetchedTimeline = await timelineQueries.fetchTimeline(timelineId)
        setTimeline(fetchedTimeline.data)
    }
    useEffect(() => {
        fetchTimeline(props.match.params.id)
    }, [props.match.params.id])

    return (
        <div>
            <h3>{ timeline.title }</h3>
        </div>
    )
}

export default Timeline
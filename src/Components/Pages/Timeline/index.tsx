import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { timelineQueries } from '../../../queries'
import { ITimeline } from '../../../interfaces'

// import child components
import { AddNode } from '../../Forms'
import Node from './Node'

interface IParams { id: string }
const Timeline: React.FC<RouteComponentProps<IParams>> = ({match}) => {
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
        fetchTimeline(match.params.id)
    }, [match.params.id])

    console.log(timeline)
    return (
        <div>
            <h3>{ timeline.title }</h3>
            <AddNode timelineId={ match.params.id } />
            {
                timeline.nodes.length > 0 &&
                timeline.nodes.map(node => <Node { ...node } />)
            }
        </div>
    )
}

export default Timeline
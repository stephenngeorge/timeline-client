import './timeline.css';

import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { timelineQueries } from '../../../queries'
import { ITimeline } from '../../../interfaces'

// import child components
import { AddNode } from '../../Forms'
import Node from './Node'

// assets imports
import { create_icon_red, create_icon_white, edit_icon_white } from '../../../assets'

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
    const [ timeline, setTimeline ] = useState<ITimeline>(initialState)
    const [ addNodeForm, setAddNodeForm ] = useState<boolean>(false)

    // get timeline on component mount from params.timelineId
    const fetchTimeline = async (timelineId: string) => {
        const fetchedTimeline = await timelineQueries.fetchTimeline(timelineId)
        setTimeline(fetchedTimeline.data)
    }
    // make api call
    useEffect(() => {
        fetchTimeline(match.params.id)
    }, [match.params.id]) // <-- effect runs whenever timelneId param changes

    return (
        <div className='timeline'>
            <div className='timeline-page-header'>
                <h3>{ timeline.title }</h3>
                <div className='timeline-controls'>
                    <button className='btn-add' onClick={
                        () => {
                            const addNodeBtn = document.querySelector('.btn-add')
                            if (addNodeBtn !== null) addNodeBtn.classList.toggle('form-active')
                            setAddNodeForm(!addNodeForm)
                        }
                    }>
                        <img src={ create_icon_white } alt='add node' id='btn-add-node' />
                    </button>

                    <button id='btn-edit' onClick={
                        () => { /* edit timeline page */ }
                    }>
                        <img src={ edit_icon_white } alt='edit timeline' id='btn-edit-timeline' />
                    </button>
                        
                    <button id='btn-delete' onClick={
                        () => { /* write query to delete timeline */ }
                    }>
                        <img src={ create_icon_red } alt='delete timeline' id='btn-delete-timeline' />
                    </button>
                </div>
            </div>
            {
                !!addNodeForm &&
                <AddNode    timelineId={ match.params.id }
                            fetchTimeline={ fetchTimeline }
                            author={ timeline.author }
                />
            }
            {
                timeline.nodes.length > 0 &&
                timeline.nodes.map(node => <Node key={ node._id } { ...node } />)
            }
        </div>
    )
}

export default Timeline
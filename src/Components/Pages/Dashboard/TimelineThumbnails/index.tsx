import './thumbnails.css'

import React from 'react'
import { Link } from 'react-router-dom'

import TimelineSummary from '../TimelineSummary'

import { ITimeline } from '../../../../interfaces'
interface ITimelineThumbnailProps {
    timelines: ITimeline[]
}

const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({timelines}) => {
    return (
        <ul className='timeline-thumbnails'>
            {
                timelines.map(timeline => {
                    return (
                        <li className='thumbnail' key={ timeline._id }>
                            <Link to={`/timeline/${timeline._id}`}>
                                <div className='timeline-header'>
                                    <p id='timeline-title'>{ timeline.title }</p>
                                    <p id='timeline-nodes-length'>({ timeline.nodes.length })</p>
                                </div>
                                {
                                    !!timeline.description && timeline.description.length > 0 &&
                                    <p id='timeline-description'>{
                                        timeline.description.length > 20 ?
                                            `${timeline.description.substring(0, 20)}...` : timeline.description
                                    }</p>
                                }
                                {
                                    timeline.nodes.length > 0 &&
                                    <TimelineSummary timelineId={ timeline._id } />
                                }
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TimelineThumbnails
import './thumbnails.css'

import React from 'react'
import { Link } from 'react-router-dom'

import TimelineSummary from '../TimelineSummary'

// asset imports
import { deadline_icon } from '../../../../assets'

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
                            <div className='timeline-header'>
                                <Link to={`/timeline/${timeline._id}`} id='timeline-title'>{ timeline.title }</Link>
                                <p id='timeline-nodes-length'>({ timeline.nodes.length })</p>
                                <img src={ deadline_icon } id='deadline_icon' alt='deadline icon' />
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
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TimelineThumbnails
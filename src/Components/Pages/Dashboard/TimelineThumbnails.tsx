import React from 'react'
import { Link } from 'react-router-dom'

import TimelineSummary from './TimelineSummary'

import { ITimeline } from '../../../interfaces'
interface ITimelineThumbnailProps {
    timelines: ITimeline[]
}

const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({timelines}) => {
    return (
        <ul>
            {
                timelines.map(timeline => {
                    return (
                        <li key={ timeline._id }>
                            <Link to={`/timeline/${timeline._id}`}>
                                <div className='timeline-header'>
                                    <p>{ timeline.title }</p>
                                    <p>({ timeline.nodes.length })</p>
                                </div>
                                {
                                    !!timeline.description && timeline.description.length > 0 &&
                                    <p>{ timeline.description.substring(0, 20) }...</p>
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
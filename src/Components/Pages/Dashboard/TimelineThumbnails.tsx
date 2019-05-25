import React from 'react'
import { Link } from 'react-router-dom'

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
                        <li>
                            <Link to={`/timeline/${timeline._id}`}>
                                { timeline.title }
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TimelineThumbnails
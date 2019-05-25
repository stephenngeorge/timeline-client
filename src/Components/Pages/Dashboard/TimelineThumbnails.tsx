import React from 'react'
import { Link } from 'react-router-dom'

import { ITimeline } from '../../../interfaces'
interface ITimelineThumbnailProps {
    timelines: ITimeline[]
}

const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({timelines}) => {
    console.log(timelines)
    return (
        <ul>
            {
                timelines.map(timeline => {
                    return (
                        <li key={ timeline._id }>
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
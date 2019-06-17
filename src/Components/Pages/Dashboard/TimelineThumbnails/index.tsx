import './thumbnails.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../dashboardContext'

import TimelineSummary from '../TimelineSummary'

// asset imports
import { add_deadline_icon, deadline_icon } from '../../../../assets'

import { ITimeline } from '../../../../interfaces'
interface ITimelineThumbnailProps {
    timelines: ITimeline[]
}

const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({timelines}) => {

    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)

    return (
        <ul className='timeline-thumbnails'>
            {
                timelines.map(timeline => {
                    console.log(timeline.deadline)
                    return (
                        <li className='thumbnail' key={ timeline._id }>
                            <div className='timeline-header'>
                                <Link to={`/timeline/${timeline._id}`} id='timeline-title'>{ timeline.title }</Link>
                                <p id='timeline-nodes-length'>({ timeline.nodes.length })</p>
                                {
                                    timeline.deadline !== undefined &&
                                    <img src={ deadline_icon } id='deadline_icon' alt='deadline icon' />
                                }
                                {
                                    timeline.deadline === undefined &&
                                    <img    onClick={ () => setDashboardProps({ dateTimeSelector: !dashboardProps.dateTimeSelector }) }
                                            src={ add_deadline_icon }
                                            id='deadline_icon'
                                            alt='deadline icon'
                                    />
                                }
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
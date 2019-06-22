import './thumbnails.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboardContext from '../dashboardContext'

// component imports
import Countdown from './Countdown'
import TimelineSummary from '../TimelineSummary'
import { AddTimeline } from '../../../Forms'

// asset imports
import { add_deadline_icon_grey } from '../../../../assets'

import { ITimeline } from '../../../../interfaces'
interface ITimelineThumbnailProps {
    timelines: ITimeline[],
    addTimelineForm: boolean
}
const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({addTimelineForm, timelines}) => {

    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)

    const handleDeadlineClick = (timelineId: string, timelineTitle: string) => {
        const { dateTimeSelector, focusTimelineId } = dashboardProps
        if (!dateTimeSelector && focusTimelineId !== timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: !dateTimeSelector,
                focusTimelineId: timelineId,
                focusTimelineTitle: timelineTitle
            })
        }
        else if (!!dateTimeSelector && focusTimelineId !== timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: true,
                focusTimelineId: timelineId,
                focusTimelineTitle: timelineTitle
            })
        }
        else if (!!dateTimeSelector && focusTimelineId === timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: false,
                focusTimelineId: '',
                focusTimelineTitle: ''
            })
        }
    }

    const animate = !!addTimelineForm ? 'appear' : 'disappear'
    return (
        <ul className='timeline-thumbnails'>
            {
                !!addTimelineForm &&
                <li className={`${animate} form-thumbnail`}>
                    <AddTimeline animate={ animate || '' } />
                </li>
            }
            {
                timelines.map(timeline => {
                    return (
                        <li className='thumbnail' key={ timeline._id }>
                            <div className='timeline-header'>
                                <Link to={`/timeline/${timeline._id}`} id='timeline-title'>{ timeline.title }</Link>
                                <p id='timeline-nodes-length'>({ timeline.nodes.length })</p>
                                {
                                    timeline.deadline !== undefined &&
                                    <Countdown deadline={ timeline.deadline } />
                                }
                                {
                                    timeline.deadline === undefined &&
                                    <img    onClick={ () => {
                                                if (!dashboardProps.addTimelineForm) handleDeadlineClick(timeline._id, timeline.title)    
                                            } }
                                            src={ add_deadline_icon_grey }
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
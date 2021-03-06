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
    timelines: ITimeline[]
}
const TimelineThumbnails: React.FC<ITimelineThumbnailProps> = ({timelines}) => {
    // access local dashboard context
    // will need to control deadline form toggle
    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)
    
    // bring date time selector onto screen or remove it depending on current state & what has been clicked
    const handleDeadlineClick = (timelineId: string, timelineTitle: string) => {
        const { dateTimeSelector, focusTimelineId } = dashboardProps
        // when dateTimeSelector is off-screen & timeline is clicked that is not currently in 'focus'
        if (!dateTimeSelector && focusTimelineId !== timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: !dateTimeSelector,
                focusTimelineId: timelineId,
                focusTimelineTitle: timelineTitle
            })
        }
        // when dateTimeSelector is on screen & timeline is clicked that is not currently in 'focus'
        else if (!!dateTimeSelector && focusTimelineId !== timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: true,
                focusTimelineId: timelineId,
                focusTimelineTitle: timelineTitle
            })
        }
        // when dateTimeSelector is on screen & same timeline is clicked again
        else if (!!dateTimeSelector && focusTimelineId === timelineId) {
            setDashboardProps({
                ...dashboardProps,
                dateTimeSelector: false,
                focusTimelineId: '',
                focusTimelineTitle: ''
            })
        }
    }
    // determine animation based on props
    const animate = !!dashboardProps.addTimelineForm ? 'appear' : 'disappear'
    return (
        <ul className='timeline-thumbnails'>
            {
                // show form when addTimelineForm is true, pass in .appear class
                // the empty string fallback catches initial render
                !!dashboardProps.addTimelineForm &&
                <li className={`${animate} form-thumbnail`}>
                    <AddTimeline animate={ animate || '' } />
                </li>
            }
            {
                // return thumbnail for each timeline
                timelines.map(timeline => {
                    return (
                        <li className='thumbnail' key={ timeline._id }>
                            <div className='timeline-header'>
                                <Link to={`/timeline/${timeline._id}`} id='timeline-title'>{ timeline.title }</Link>
                                <p id='timeline-nodes-length'>({ timeline.nodes.length })</p>
                                {
                                    (timeline.deadline !== undefined && timeline.status !== 'COMPLETE') &&
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
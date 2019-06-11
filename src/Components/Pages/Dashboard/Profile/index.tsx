import './profile.css'

import React, { useState } from 'react'

import { IUser } from '../../../../interfaces'

// component imports
import { AddTimeline } from '../../../Forms'
import TimelineThumbnails from '.././TimelineThumbnails'
import ProfileControls from '../ProfileControls'

const Profile: React.FC<IUser> = ({username, timelines}) => {
    const [addTimelineForm, setAddTimelineForm] = useState(false)

    return (
        <div className='profile'>
            <div className='profile-header'>
                <h2>{ username }</h2>
                <ProfileControls setAddTimelineForm={ setAddTimelineForm } addTimelineForm={ addTimelineForm } />
            </div>
            {
                !!addTimelineForm &&
                <AddTimeline />
            }
            <TimelineThumbnails timelines={ timelines } />
        </div>
    )
}

export default Profile
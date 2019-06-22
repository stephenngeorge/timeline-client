import './profile.css'

import React, { useState } from 'react'

import { IUser } from '../../../../interfaces'

// component imports
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
            <TimelineThumbnails timelines={ timelines }
                                addTimelineForm={ addTimelineForm } 
            />
        </div>
    )
}

export default Profile
import './profile.css'

import React from 'react'

import { IUser } from '../../../../interfaces'

// component imports
import { AddTimeline } from '../../../Forms'
import TimelineThumbnails from '.././TimelineThumbnails'
import ProfileControls from '../ProfileControls'

const Profile: React.FC<IUser> = ({username, timelines}) => {
    return (
        <div className='profile'>
            <div className='profile-header'>
                <h2>{ username }</h2>
                <ProfileControls />
            </div>
            <AddTimeline />
            <TimelineThumbnails timelines={ timelines } />
        </div>
    )
}

export default Profile
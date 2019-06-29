import './profilecontrols.css'
import './typography.css'

import React, { useContext, useEffect, useState } from 'react'
import DashboardContext from '../dashboardContext'

// asset imports
import { create_icon_white, edit_icon_white, settings_icon_white } from '../../../../assets'

const ProfileControls: React.FC = () => {
    const [label, setLabel] = useState('')
    // consume local dashboard state
    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)
    // control label that appears next to controls
    useEffect(() => {
        const   createTimelineButton = document.getElementById('button-createTimeline'),
                editProfileButton = document.getElementById('button-editProfile'),
                accountSettingsButton = document.getElementById('button-accountSettings')

        const   timelineLabel = () => setLabel('create timeline'),
                editLabel = () => setLabel('edit profile'),
                settingsLabel = () => setLabel('account settings'),
                removeLabel = () => setLabel('')

        if (createTimelineButton !== null && editProfileButton !== null && accountSettingsButton !== null) {
            createTimelineButton.addEventListener('mouseover', timelineLabel)
            editProfileButton.addEventListener('mouseover', editLabel)
            accountSettingsButton.addEventListener('mouseover', settingsLabel)

            createTimelineButton.addEventListener('mouseout', removeLabel)
            editProfileButton.addEventListener('mouseout', removeLabel)
            accountSettingsButton.addEventListener('mouseout', removeLabel)
        }
        // clean up function to remove event listeners when component unmounts
        return () => {
            if (createTimelineButton !== null && editProfileButton !== null && accountSettingsButton !== null) {
                createTimelineButton.removeEventListener('mouseover', timelineLabel)
                createTimelineButton.removeEventListener('mouseout', removeLabel)

                editProfileButton.removeEventListener('mouseover', editLabel)
                editProfileButton.removeEventListener('mouseout', removeLabel)

                accountSettingsButton.removeEventListener('mouseover', settingsLabel)
                accountSettingsButton.removeEventListener('mouseout', removeLabel)
            }
        }
    }, []) // <-- effect runs once on component mount

    return (
        <div className='profile-header__controls'>
            <p id='controls-label'>{ label }</p>
            <button id='button-createTimeline' onClick={ () => {
                setDashboardProps({...dashboardProps, addTimelineForm: !dashboardProps.addTimelineForm})
            } }>
                <img src={ create_icon_white } alt='add timeline' />
            </button>
            <button id='button-editProfile'>
                <img src={ edit_icon_white } alt='edit profile' />
            </button>
            <button id='button-accountSettings'>
                <img src={ settings_icon_white } alt='account settings' />
            </button>
        </div>
    )
}

export default ProfileControls
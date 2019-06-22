import './profilecontrols.css'
import './typography.css'

import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import DashboardContext from '../dashboardContext'

// asset imports
import { create_icon_white, edit_icon_white, settings_icon_white } from '../../../../assets'

interface IProfileControlsProps {
    setAddTimelineForm: Dispatch<SetStateAction<boolean>>,
    addTimelineForm: boolean
}

const ProfileControls: React.FC<IProfileControlsProps> = ({setAddTimelineForm, addTimelineForm}) => {
    const [label, setLabel] = useState('')

    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)

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
    }, [])

    return (
        <div className='profile-header__controls'>
            <p id='controls-label'>{ label }</p>
            <button id='button-createTimeline' onClick={ () => {
                setAddTimelineForm(!addTimelineForm)
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
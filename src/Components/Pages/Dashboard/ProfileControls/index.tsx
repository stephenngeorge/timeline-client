import './profilecontrols.css'

import React, { Dispatch, SetStateAction } from 'react'

// asset imports
import { create_icon, edit_icon, settings_icon } from '../../../../assets'

interface IProfileControlsProps {
    setAddTimelineForm: Dispatch<SetStateAction<boolean>>,
    addTimelineForm: boolean
}

const ProfileControls: React.FC<IProfileControlsProps> = ({setAddTimelineForm, addTimelineForm}) => {
    return (
        <div className='profile-header__controls'>
            <button id='button-createTimeline' onClick={ () => setAddTimelineForm(!addTimelineForm) }>
                <img src={ create_icon } alt='add timeline' />
            </button>
            <button id='button-editProfile'>
                <img src={ edit_icon } alt='edit profile' />
            </button>
            <button id='button-accountSettings'>
                <img src={ settings_icon } alt='account settings' />
            </button>
        </div>
    )
}

export default ProfileControls
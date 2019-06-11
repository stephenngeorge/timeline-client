import './profilecontrols.css'

import React from 'react'

// asset imports
import { create_icon, edit_icon, settings_icon } from '../../../../assets'

const ProfileControls: React.FC = () => {
    return (
        <div className='profile-header__controls'>
            <button id='button-createTimeline'>
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
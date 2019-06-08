import './logo.css'

import React from 'react'

const Logo: React.FC = () => {
    return (
        <div className='logo'>
            <div className='node' id='node-1'></div>
            <div className='node' id='node-2'></div>
            <h1>Timelines</h1>
            <div className='node' id='node-3'></div>
            <div className='node' id='node-4'></div>
            <div className='node' id='node-5'></div>
        </div>
    )
}

export default Logo
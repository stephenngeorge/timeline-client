import React, { useState } from 'react'

import { nodeQueries } from '../../../queries'

interface IAddNodeProps {
    timelineId: string
}
const AddNode: React.FC<IAddNodeProps> = ({timelineId}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <form onSubmit={ e => {
            e.preventDefault()
            nodeQueries.addNode(title, description, timelineId)
        } }>
            <div className='form-group'>
                <label>title:</label>
                <input  type='text'
                        name='title'
                        value={ title }
                        onChange={ (e: any) => setTitle(e.target.value) }
                />
            </div>

            <div className='form-group'>
                <label>description:</label>
                <input  type='text'
                        name='description'
                        value={ description }
                        onChange={ (e: any) => setDescription(e.target.value) }
                />
            </div>

            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddNode
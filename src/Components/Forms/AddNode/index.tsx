import React, { useState } from 'react'

import { nodeQueries } from '../../../queries'

interface IAddNodeProps {
    timelineId: string,
    fetchTimeline: (id: string) => void
}
const AddNode: React.FC<IAddNodeProps> = ({timelineId, fetchTimeline}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <form onSubmit={ async e => {
            e.preventDefault()
            await nodeQueries.addNode(title, description, timelineId)
            setTitle('')
            setDescription('')
            await fetchTimeline(timelineId)
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
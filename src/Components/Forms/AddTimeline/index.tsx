import React, { useState, useContext } from 'react'

import { AuthContext, types } from '../../../store'
import { timelineQueries } from '../../../queries'

const AddTimeline: React.FC = () => {
    const { dispatch } = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        const timeline = await timelineQueries.addTimeline(title, description)
        console.log(timeline)
        dispatch({
            type: types.ADDTIMELINE,
            payload: timeline.data
        })
    }

    return (
        <form onSubmit={ async (e: any) => {
            e.preventDefault()
            await handleSubmit()
            setTitle('')
            setDescription('')
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

            <button type='submit'>add</button>
        </form>
    )
}

export default AddTimeline
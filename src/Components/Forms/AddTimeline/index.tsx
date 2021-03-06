import './addtimelineform.css'

import React, { useContext, useEffect, useState } from 'react'

import { AuthContext, types } from '../../../store'
import { timelineQueries } from '../../../queries'

// asset imports
import { create_icon_white } from '../../../assets'

interface IAddTimelineProps {
    animate: string
}
const AddTimeline: React.FC<IAddTimelineProps> = ({ animate }) => {
    const { dispatch } = useContext(AuthContext)
    // control form inputs & button disabled state
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    // only allow form submission if title has been entered
    useEffect(() => {
        if (title !== '') setDisabled(false)
        else setDisabled(true)
    }, [title]) // <-- effect will run every time title input is changed

    // submit form, dispatch ADD_TIMELINE action with payload = return data from API call
    const handleSubmit = async () => {
        const timeline = await timelineQueries.addTimeline(title, description)
        dispatch({
            type: types.ADD_TIMELINE,
            payload: timeline.data
        })
    }

    return (
        <form className={ `${animate} add-timeline-form` } onSubmit={ async (e: any) => {
            e.preventDefault()
            await handleSubmit()
            // clear form
            setTitle('')
            setDescription('')
        } }>
            <div className='form-group'>
                <input  type='text'
                        name='title'
                        id='title'
                        value={ title }
                        onChange={ (e: any) => setTitle(e.target.value) }
                />
                <label htmlFor='title'>title</label>
            </div>

            <div className='form-group'>
                <input  type='text'
                        name='description'
                        id='description'
                        value={ description }
                        onChange={ (e: any) => setDescription(e.target.value) }
                />
                <label htmlFor='description'>description</label>
            </div>

            <button disabled={ disabled } id='add-timeline' type='submit'>
                <img src={ create_icon_white } alt='submit timeline form' />
            </button>
        </form>
    )
}

export default AddTimeline
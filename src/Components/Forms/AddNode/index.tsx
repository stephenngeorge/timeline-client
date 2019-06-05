import React, {  useContext, useState } from 'react'
import { AuthContext, types } from '../../../store'

import { nodeQueries } from '../../../queries'

interface IAddNodeProps {
    timelineId: string,
    fetchTimeline: (id: string) => void
}
const AddNode: React.FC<IAddNodeProps> = ({timelineId, fetchTimeline}) => {
    const { dispatch } = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        const node = await nodeQueries.addNode(title, description, timelineId)
        dispatch({ type: types.ADD_NODE })
    }

    return (
        <form onSubmit={ async e => {
            e.preventDefault()
            await handleSubmit()
            setTitle('')
            setDescription('')
            await fetchTimeline(timelineId)
        } }>
            <div className='form-group'>
                <label htmlFor='title'>title:</label>
                <input  type='text'
                        name='title'
                        id='title'
                        value={ title }
                        onChange={ (e: any) => setTitle(e.target.value) }
                />
            </div>

            <div className='form-group'>
                <label htmlFor='description'>description:</label>
                <input  type='text'
                        name='description'
                        id='description'
                        value={ description }
                        onChange={ (e: any) => setDescription(e.target.value) }
                />
            </div>

            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddNode
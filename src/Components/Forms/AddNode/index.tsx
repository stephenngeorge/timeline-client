import React, {  useContext, useState } from 'react'
import { AuthContext, types } from '../../../store'

import { nodeQueries, timelineQueries } from '../../../queries'

interface IAddNodeProps {
    author: string,
    timelineId: string,
    fetchTimeline: (id: string) => void
}
const AddNode: React.FC<IAddNodeProps> = ({author, timelineId, fetchTimeline}) => {
    const { dispatch } = useContext(AuthContext)
    // control form inputs & button disabled state
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    const handleSubmit = async () => {
        await nodeQueries.addNode(title, description, timelineId)
        // dispatch action to trigger timeline rerender
        dispatch({ type: types.ADD_NODE })
        // refetch timelines & pass to authState on global context
        // ensures dashboard thumbnails stay inline with local timeline changes
        const updatedTimelines = await timelineQueries.fetchUserTimelines(author)
        dispatch({
            type: types.REFRESH_TIMELINES,
            payload: updatedTimelines.data
        })
    }

    return (
        <form onSubmit={ async e => {
            e.preventDefault()
            await handleSubmit()
            // clear form
            setTitle('')
            setDescription('')
            // trigger reload of timeline
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

            <button disabled={ disabled } type='submit'>ADD</button>
        </form>
    )
}

export default AddNode
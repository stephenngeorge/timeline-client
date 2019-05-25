import { url } from './config'

// FETCH SINGLE TIMELINE, CALLED FROM TIMELINE PAGE INDEX
export const fetchTimeline = async (timelineId: string) => {
    const timeline = await fetch(`${url}/timelines/${timelineId}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    // parse response
    const response = await timeline.json()

    return response
}

// ADD TIMELINE, CALLED FROM ADDTIMELINE FORM
export const addTimeline = async (title: string, description: string) => {
    const newTimeline = await fetch(`${url}/timelines`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    })
    // parse response
    const response = await newTimeline.json()

    return response
}
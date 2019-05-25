import { url } from './config'

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
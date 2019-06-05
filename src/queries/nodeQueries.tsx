import { url } from './config'

export const addNode = async (title: string, description: string = '', timelineId: string) => {
    const newNode = await fetch(`${url}/nodes`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            title: title,
            description: description,
            timeline: timelineId
        })
    })
    // parse response
    const response = await newNode.json()

    return response
}
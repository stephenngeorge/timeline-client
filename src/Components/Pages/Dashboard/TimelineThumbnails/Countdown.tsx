import React, { useEffect, useState } from 'react'

// asset imports
import { deadline_icon } from '../../../../assets'

interface ICountdown {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}
interface ICountdownProps {
    deadline: string
}
const Countdown: React.FC<ICountdownProps> = ({ deadline }) => {

    const [ countdown, setCountdown ] = useState<ICountdown | undefined>()
    const [ colour, setColour ] = useState<string>('')

    useEffect(() => {
        const calculateCountdown = () => {
            const difference = Math.floor(Math.abs(new Date(deadline).getTime() - Date.now()) / 1000)

            const days = difference >= 86400 ? Math.floor(difference / 86400) : 0
            const hours = days >= 1 ? Math.floor((difference - 86400 * days) / 3600) : difference >= 3600 ? Math.floor(difference / 3600) : 0
            const minutes = days >= 1 || hours >= 1 ? Math.floor((difference - ((86400 * days) + (3600 * hours))) / 60) : difference >= 60 ? Math.floor(difference / 60) : 0
            const seconds = days >= 1 || hours >= 1 || minutes >= 1 ? Math.floor(difference - ((86400 * days) + (3600 * hours) + (60 * minutes))) : Math.floor(difference)

            setCountdown({days, hours, minutes, seconds})

            const condition = (new Date(deadline).getTime() - Date.now()) / 1000
            if (condition <= 3600) setColour('var(--node-problem)')
            else if (condition < 86400) setColour('var(--node-pending)')
            else setColour('var(--node-complete)')
        }
        const calculate = setInterval(calculateCountdown, 1000)

        return () => {
            clearInterval(calculate)
        }
    }, [deadline])

    return (
        <div className='deadline'>
            {
                countdown !== undefined &&
                <p style={{backgroundColor: colour}}>
                    <span>{ countdown.days }</span> : 
                    <span>{ countdown.hours }</span> : 
                    <span>{ countdown.minutes }</span> : 
                    <span>{ countdown.seconds }</span>
                </p>
            }
            <img    src={ deadline_icon }
                    id='deadline_icon'
                    alt='deadline icon'
            />
        </div>
    )
}

export default Countdown
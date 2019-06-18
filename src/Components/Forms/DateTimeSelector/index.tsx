import './datetimeselector.css'

import React, { useState } from 'react'

const DateTimeSelector: React.FC = () => {
    const months: string[] = [
        'JAN', 'FEB', 'MAR',
        'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP',
        'OCT', 'NOV', 'DEC'
    ]

    const [ selectedMonth, setSelectedMonth ] = useState<string>('January')
    const days = []
    let count = 31

    switch(selectedMonth) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            count = 31
            break
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            count = 30
            break
        case 'February':
            count = 29
            break
        default: count = 30
    }

    for (let i = 0; i < count; i++) {
        days.push(i)
    }
    return (
        <form className='date-time-selector'>
            <div className='months'>
                {
                    months.map(month => {
                       return <div onClick={() => setSelectedMonth(month)} key={ month } className='month_single'>{month}</div>
                    })
                }
            </div>
            <div className='days'>
                {
                    days.map(day => <p key={day}>{day + 1}</p>)
                }
            </div>
        </form>
    )
}

export default DateTimeSelector
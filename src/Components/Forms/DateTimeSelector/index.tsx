import './datetimeselector.css'

import React, { useContext, useState } from 'react'
import DashboardContext from '../../Pages/Dashboard/dashboardContext'

import { months, IMonth } from './data'

interface IDateTimeSelectorProps {
    timelineId: string,
    timelineTitle: string
}
const DateTimeSelector: React.FC<IDateTimeSelectorProps> = ({ timelineTitle }) => {

    const [ selectedMonth, setSelectedMonth ] = useState<IMonth>({month: 'January', monthShort: 'JAN', dayCount: 31})
    const [ selectedDay, setSelectedDay ] = useState<number>(0)
    const [ hours, setHours ] = useState<string>('')
    const [ minutes, setMinutes ] = useState<string>('')

    const days = []
    for (let i = 0; i < selectedMonth.dayCount; i++) {
        days.push(i)
    }

    const { dashboardProps } = useContext(DashboardContext)
    let animation = ''
    const selector = document.querySelector('.date-time-selector')
    if (selector !== null) {
        dashboardProps.dateTimeSelector === true ? animation = 'slide-in' : animation = 'slide-out'
    }
    return (
        <form className={`date-time-selector ${ animation }`}>
            <h3 className='timeline-title'>{ timelineTitle }</h3>
            <div className='months'>
                {
                    months.map(month => {
                        const chosenMonth = selectedMonth.monthShort === month.monthShort ? 'chosen-month' : ''
                        return <div onClick={() => setSelectedMonth(month)} key={ month.monthShort } className={`month_single ${chosenMonth}`}>{month.monthShort}</div>
                    })
                }
            </div>
            <div className='days'>
                {
                    days.map(day => {
                        const chosenDay = selectedDay === day ? 'chosen-day' : ''
                        return <p onClick={ () => setSelectedDay(day) } className={`day_single ${chosenDay}`} key={day}>{day + 1}</p>
                    })
                }
            </div>
            <div className='time'>
                <div className='date-form-group'>
                    <input  name='hours'
                            id='hours'
                            type='text'
                            value={ hours }
                            onChange={ (e:any) => setHours(e.target.value) }
                    />
                </div>
                <p>:</p>
                <div className='date-form-group'>
                    <input  name='minutes'
                            id='minutes'
                            type='text'
                            value={ minutes }
                            onChange={ (e:any) => setMinutes(e.target.value) }
                    />
                </div>
            </div>
        </form>
    )
}

export default DateTimeSelector
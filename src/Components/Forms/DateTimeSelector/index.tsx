import './datetimeselector.css'

import React, { useContext, useState } from 'react'
import DashboardContext from '../../Pages/Dashboard/dashboardContext'

const DateTimeSelector: React.FC = () => {
    interface IMonth {
        month: string,
        monthShort: string,
        dayCount: number
    }
    const months: IMonth[] = [
        {month: 'January', monthShort: 'JAN', dayCount: 31},
        {month: 'February', monthShort: 'FEB', dayCount: 29},
        {month: 'March', monthShort: 'MAR', dayCount: 31},
        {month: 'April', monthShort: 'APR', dayCount: 30},
        {month: 'May', monthShort: 'MAY', dayCount: 31},
        {month: 'June', monthShort: 'JUN', dayCount: 30},
        {month: 'July', monthShort: 'JUL', dayCount: 31},
        {month: 'August', monthShort: 'AUG', dayCount: 31},
        {month: 'September', monthShort: 'SEP', dayCount: 30},
        {month: 'October', monthShort: 'OCT', dayCount: 31},
        {month: 'November', monthShort: 'NOV', dayCount: 30},
        {month: 'December', monthShort: 'DEC', dayCount: 31}
    ]

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
                <input  name='hours'
                        id='hours'
                        type='text'
                        value={ hours }
                        onChange={ (e:any) => setHours(e.target.value) }
                />
                <p>:</p>
                <input  name='minutes'
                        id='minutes'
                        type='text'
                        value={ minutes }
                        onChange={ (e:any) => setMinutes(e.target.value) }
                />
            </div>
        </form>
    )
}

export default DateTimeSelector
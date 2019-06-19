import './datetimeselector.css'

import React, { useContext, useEffect, useState } from 'react'
import DashboardContext from '../../Pages/Dashboard/dashboardContext'

// asset imports
import { add_deadline_icon_white } from '../../../assets'

import { months, IMonth } from './data'

interface IDateTimeSelectorProps {
    timelineId: string,
    timelineTitle: string
}
const DateTimeSelector: React.FC<IDateTimeSelectorProps> = ({ timelineTitle }) => {

    const [ selectedMonth, setSelectedMonth ] = useState<IMonth>({month: '', monthShort: '', dayCount: 31})
    const [ selectedDay, setSelectedDay ] = useState<number>(50)
    const [ hours, setHours ] = useState<string>('')
    const [ minutes, setMinutes ] = useState<string>('')
    const [ disabled, setDisabled ] = useState<boolean>(true)

    useEffect(() => {
        const monthNode = document.querySelector('#progress-month')
        const dayNode = document.querySelector('#progress-day')
        const finalNode = document.querySelector('#progress-complete')

        if (monthNode !== null && dayNode !== null && finalNode !== null) {
            selectedMonth.monthShort === '' ? monthNode.classList.remove('completed') : monthNode.classList.add('completed')
            selectedDay === 50 ? dayNode.classList.remove('completed') : dayNode.classList.add('completed')
            
            if (hours !== '' && minutes !== '' && monthNode.classList.contains('completed') && dayNode.classList.contains('completed')) {
                setDisabled(false)
                finalNode.classList.add('validform')
            }
            else {
                setDisabled(true)
                finalNode.classList.remove('validform')
            }
        }
    }, [selectedMonth, selectedDay, hours, minutes])

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
        <div className={`date-time-selector_wrapper ${ animation }`}>
            <form className='date-time-selector'>
                <h3 className='timeline-title'>{ timelineTitle } deadline</h3>
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
                        <label htmlFor='hours'>HH</label>
                    </div>
                    <p>:</p>
                    <div className='date-form-group'>
                        <input  name='minutes'
                                id='minutes'
                                type='text'
                                value={ minutes }
                                onChange={ (e:any) => setMinutes(e.target.value) }
                        />
                        <label htmlFor='minutes'>MM</label>
                    </div>
                    <p className='tip'>use 24hr clock times</p>
                </div>
            </form>

            <div className='deadline-progress'>
                <div id='progress-month' className='deadline-progress-node'></div>
                <div id='progress-day' className='deadline-progress-node'></div>
                <button disabled={ disabled } id='progress-complete' className='deadline-progress-node'>
                    <img src={ add_deadline_icon_white } alt='add deadline' />
                </button>
            </div>
        </div>
    )
}

export default DateTimeSelector
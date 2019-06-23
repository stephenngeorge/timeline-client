import './datetimeselector.css'

import React, { useContext, useEffect, useState } from 'react'
import DashboardContext from '../../Pages/Dashboard/dashboardContext'
import { AuthContext, types } from '../../../store'
// query imports
import { timelineQueries } from '../../../queries'
// asset imports
import { add_deadline_icon_white, less_icon } from '../../../assets'

import { months, IMonth } from './data'

interface IDateTimeSelectorProps {
    timelineId: string,
    timelineTitle: string
}
const DateTimeSelector: React.FC<IDateTimeSelectorProps> = ({ timelineId, timelineTitle }) => {
    // get year to set initial state below
    const currentYear = new Date().getFullYear()
    // control form inputs & button disabled state
    const [ year, setYear ] = useState<number>(currentYear)
    const [ selectedMonth, setSelectedMonth ] = useState<IMonth>({month: '', monthShort: '', index: 0, dayCount: 31})
    const [ selectedDay, setSelectedDay ] = useState<number>(50)
    const [ hours, setHours ] = useState<string>('')
    const [ minutes, setMinutes ] = useState<string>('')
    const [ disabled, setDisabled ] = useState<boolean>(true)

    // handle .deadline-progress classes
    useEffect(() => {
        // get references to .deadline-progress nodes
        const monthNode = document.querySelector('#progress-month')
        const dayNode = document.querySelector('#progress-day')
        const finalNode = document.querySelector('#progress-complete')
        // check above dom elements exist
        if (monthNode !== null && dayNode !== null && finalNode !== null) {
            // if no month selected, this stage of the form is not complete, else add .completed class
            selectedMonth.monthShort === '' ? monthNode.classList.remove('completed') : monthNode.classList.add('completed')
            // 50 is arbitrary high value that will never appear in any month. If valid day is selected,
            // this stage of the form is completed
            selectedDay === 50 ? dayNode.classList.remove('completed') : dayNode.classList.add('completed')
            // check month & day are completed, & make sure neither hours or minutes are empty
            if (hours !== '' && minutes !== '' && monthNode.classList.contains('completed') && dayNode.classList.contains('completed')) {
                setDisabled(false)
                finalNode.classList.add('validform')
            }
            // if either hours or minutes has not been filled in, or an early stage of the
            // form is not completed, form is not valid
            else {
                setDisabled(true)
                finalNode.classList.remove('validform')
            }
        }
    }, [selectedMonth, selectedDay, hours, minutes]) // <-- effect will run when form inputs change

    // set up empty array & push correct number of items for whichever month is 'active'
    // days is mapped to form second section of form
    const days = []
    for (let i = 0; i < selectedMonth.dayCount; i++) {
        days.push(i)
    }

    // ACCESS DASHBOARD CONTEXT,
    // NEED DASHBOARD PROPS TO HANDLE FORM TOGGLES
    const { dashboardProps, setDashboardProps } = useContext(DashboardContext)
    const selector = document.querySelector('.date-time-selector_wrapper')
    if (selector !== null && !dashboardProps.addTimelineForm) {
        dashboardProps.dateTimeSelector === true ? selector.classList.add('slide-in') : selector.classList.remove('slide-in')
    }

    // ACCESS GLOBAL AUTH CONTEXT, NEED USER ID & NEED TO DISPATCH GLOBAL ACTIONS
    const { dispatch, authState } = useContext(AuthContext)

    const handleSubmit = async () => {
        const deadline = new Date(Date.UTC(year, selectedMonth.index, selectedDay, Number(hours), Number(minutes)))
        await timelineQueries.addDeadline(timelineId, deadline)
        setDashboardProps({
            ...dashboardProps,
            dateTimeSelector: false,
            focusTimelineId: '',
            focusTimelineTitle: ''
        })
        // after deadline is submitted, refetch timelines
        // & dispatch action to trigger rerender of thumbnails
        const updatedTimelines = await timelineQueries.fetchUserTimelines(authState.data._id)
        dispatch({
            type: types.REFRESH_TIMELINES,
            payload: updatedTimelines.data
        })
    }

    return (
        <div className='date-time-selector_wrapper'>
            <img    src={ less_icon }
                    alt='close date time selector'
                    id='close'
                    onClick={
                        () => {
                            const selector = document.querySelector('.date-time-selector_wrapper')
                            if (selector !== null) {
                                selector.classList.remove('slide-in')
                                setDashboardProps({
                                    ...dashboardProps,
                                    dateTimeSelector: false,
                                    focusTimelineId: '',
                                    focusTimelineTitle: ''
                                })
                            }
                        }
                    }
            />
            <form className='date-time-selector'>
                <h3 className='timeline-title'>{ timelineTitle } deadline</h3>
                <div className='year'>
                    <p className='year-button' onClick={ () => setYear(year - 1) }>
                        <img src={ less_icon } alt='minus one year' id='year-one-less' />
                    </p>
                    <p className='year-value'>{ year }</p>
                    <p className='year-button' onClick={ () => setYear(year + 1) }>
                        <img src={ less_icon } alt='plus one year' id='year-one-more' />
                    </p>
                </div>
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
                            const chosenDay = selectedDay === day + 1 ? 'chosen-day' : ''
                            return <p onClick={ () => setSelectedDay(day + 1) } className={`day_single ${chosenDay}`} key={day}>{day + 1}</p>
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
                <button onClick={ handleSubmit } disabled={ disabled } id='progress-complete' className='deadline-progress-node'>
                    <img src={ add_deadline_icon_white } alt='add deadline' />
                </button>
            </div>
        </div>
    )
}

export default DateTimeSelector
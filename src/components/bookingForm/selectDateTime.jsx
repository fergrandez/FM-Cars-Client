import '../../styles/calendar.css'
import './selectDateTime.css'
import axios from 'axios'
import ReactCalendar from 'react-calendar'
import { add, format, isBefore, isSaturday } from 'date-fns'
import { useEffect, useState } from 'react'

export const SelectDateTime = ({ formData, setFormData }) => {
    const OPEN_TIME = 9 //AM
    const CLOSING_TIME = 18 //6PM
    const SAT_CLOSING_TIME = 17 //5PM
    const BOOKING_INTERVAL = 30 //in minutes

    let { dateTime } = formData
    const [times, setTimes] = useState([])

    useEffect(() => {
        axios.get('https://fm-cars-mern-app-94ba32793065.herokuapp.com/appointment', {
            params: {
                date: formData.dateTime.date
            }
        }).then((response) => {
            if(response.data) {
                const resData = response.data
                const unavailableTimes = resData.map(({ time }) => time)
                getTimes(unavailableTimes)
            }
        })
    }, [formData.dateTime.date])


    const getTimes = (unavailableTimes) => {
        const { date } = dateTime

        const closingTime = isSaturday(date) ? SAT_CLOSING_TIME : CLOSING_TIME

        const beginning = add(date, { hours: OPEN_TIME })
        const end = add(date, { hours: closingTime })
        const interval = BOOKING_INTERVAL

        const availableTimes = []
        for(let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            const time = format(i, 'hh:mm:ss')

            if(unavailableTimes.includes(time) || i.getHours() === closingTime || !isBefore(new Date(), i)) {
                continue
            } else {
                availableTimes.push(i)
            }
        }

        setTimes(availableTimes)
    }

    const timesAvailable = times?.length ? true : false

    const [currentTile, setCurrentTile] = useState({})

    const handleClickDay = (date) => {
        dateTime = {...dateTime, date, time: '0:00', satisfied: false}
        setFormData({...formData, dateTime})

        const formattedDate = format(date, 'MMMM d, yyyy')
        const element = document.querySelector(`[aria-label="${formattedDate}"]`).parentElement
        setCurrentTile((prev) => {
            if(Object.values(prev).length > 0) {
                prev.style.color = ''
                prev.style.backgroundColor = ''
            }

            element.style.backgroundColor = '#4f46e5'
            element.style.color = 'white'

            return element
        })
    }

    const handleClickTime = (time) => {
        dateTime = {...dateTime, time, satisfied: true}
        setFormData({...formData, dateTime})
    }

    return (
        <div className='centerEverything'>
            <div className='dateTimeHeader'>
                Select Date and Time
            </div>

            <ReactCalendar minDate={new Date()} view='month' tileDisabled={({ date }) => [0].includes(date.getDay())}
            onClickDay={(date) => handleClickDay(date)}/>

            {dateTime.date && (
                <div className='timeSlots'>
                    {timesAvailable ? (
                        times.map((time, i) => (
                            <div key={`time-${i}`}>
                                <button className='timeOption' type='button' onClick={() => handleClickTime(time)}>
                                    {format(time, 'h:mm a')}
                                </button>
                            </div>
                        ))
                    ) :
                    (
                        <div className='appointmentInfo'>
                            No available appointments.
                        </div>
                    )}
                </div>
            )}

            {Boolean(dateTime.date && times?.length && dateTime.satisfied) && (
                <div className='appointmentInfo'>
                    Selected appointment on {format(dateTime.date, 'PPPP')} at {format(dateTime.time, 'h:mm a')}
                </div>
            )}
        </div>
    )
}
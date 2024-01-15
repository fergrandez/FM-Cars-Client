import './bookingForm.css'
import axios from "axios"
import emailjs from '@emailjs/browser'
import { format } from 'date-fns'
import { useState } from "react"
import { SelectDateTime } from "./selectDateTime"
import { AppointmentInfo } from "./appointmentInfo"
import { BookingConfirmation } from "./bookingConfirmartion"

export const BookingForm = () => {
    const [pageNum, setPageNum] = useState(1)
    const [formData, setFormData] = useState({
        dateTime: {},
        name: '',
        phone: '',
        email: '',
        comments: '',
        carYear: '',
        carMake: '',
        carModel: ''
    })

    const pageToDisplay = () => {
        if (pageNum === 1) {
            return <SelectDateTime formData={formData} setFormData={setFormData} />
        } else if (pageNum === 2) {
            return <AppointmentInfo formData={formData} setFormData={setFormData} />
        } else {
            return <BookingConfirmation />
        }
    }

    const isFormValid = () => {
        const formEntries = Object.entries(formData)

        for (let i = 0; i < formEntries.length; i++) {
            const key = formEntries[i][0]
            const val = formEntries[i][1]

            if (key === 'dateTime') {
                continue
            } else if (!val) {
                return false
            } else if (key === 'email' && !val.includes('@')) {
                return false
            } else if (key === 'phone' && val.length !== 10) {
                return false
            }
        }

        return true
    }

    const confirmAppointment = () => {
        if (isFormValid()) {
            axios.post('http://localhost:3001/appointment', formData).then(() => {
                const emailTemplate = (({ dateTime, ...obj}) => obj)(formData)
                emailTemplate.date = format(formData.dateTime.date, 'PPPP')
                emailTemplate.time = format(formData.dateTime.time, 'h:mm a')

                emailjs.send('service_c2stt6q', 'template_uh85dfr', emailTemplate, '5xecu7WAVOoESGs4Q')
                    .then(function(response) {
                        console.log('SUCCESSFULLY SENT CONFIRMATION EMAIL', response.status, response.text)
                    }, function(error) {
                        console.log('FAILED TO SEND CONFIRMATION EMAIL', error)
                    })
                setPageNum((currentPage) => currentPage + 1)
            })
        } else {
            alert('Form not valid')
        }
    }

    return (
        <div className='bookingForm'>
            {pageNum !== 3 && (
                <div className='bookingFormHeader'>
                    Page {pageNum}/2
                </div>
            )}

            <div className='mainFormContent'>
                <div className='bookingFormBody'>
                    {pageToDisplay()}
                </div>

                <div className='formFooter'>
                    {(pageNum > 1 && pageNum !== 3) && (
                        <button type='button' onClick={() => { setPageNum((currentPage) => currentPage - 1) }}>
                            Back
                        </button>
                    )}

                    {pageNum < 2 && (
                        <button disabled={!formData.dateTime.satisfied} onClick={() => { setPageNum((currentPage) => currentPage + 1) }}>
                            Next
                        </button>
                    )}

                    {pageNum === 2 && (
                        <button type='submit' onClick={confirmAppointment}>
                            Confirm
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
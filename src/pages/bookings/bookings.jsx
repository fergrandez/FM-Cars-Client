import './bookings.css'
import { BookingForm } from "../../components/bookingForm/bookingForm"

export const Bookings = () => {
    return (
        <div>
            <h1 className='bookTitle'>Book an Appointment</h1>

            <div className='bookingFormContainer'>
                <BookingForm />
            </div>
        </div>
    )
}
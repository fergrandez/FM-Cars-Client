import './bookings.css'
import { BookingForm } from "../../components/bookingForm"

export const Bookings = () => {
    return (
        <div>
            <h1>Book an Appointment</h1>

            <div className='bookingFormContainer'>
                <BookingForm />
            </div>
        </div>
    )
}
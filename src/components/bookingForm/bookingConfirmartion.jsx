import './bookingConfirmation.css'
import confirmation from '../../assets/confirmation.png'
import { useNavigate } from 'react-router-dom'

export const BookingConfirmation = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div className='thankYou'>
                    Thank you for booking with us!
                </div>

                <div className='confirmationImg'>
                    <img src={confirmation} />
                </div>

                <div>
                    A confirmation email with the details of your appointment has been sent to the email you provided. 
                </div>
            </div>

            <div className='navContainer'>
                <button type='button' onClick={() => window.location.reload()}>
                    New Appointment
                </button>

                <button type='button' onClick={() => navigate('/')}>
                    Home
                </button>
            </div>
        </div>
    )
}
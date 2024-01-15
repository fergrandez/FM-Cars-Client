import './contactForm.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_c2stt6q', 'template_9eimxv6', form.current, '5xecu7WAVOoESGs4Q')
            .then((result) => {
                const msg = document.getElementById('msgConfirmation')

                msg.style.color = 'green'
                msg.textContent = 'Message Sent Successfully'

                msg.classList.remove('hide')

                setTimeout(() => {
                    msg.classList.add('hide')
                    e.target.reset()
                }, 2500)
            }, (error) => {
                const msg = document.getElementById('msgConfirmation')

                msg.style.color = 'red'
                msg.textContent = 'Error Sending Message'

                msg.classList.remove('hide')

                setTimeout(() => {
                    msg.classList.add('hide')
                }, 2500)
            })
    }

    return (
        <div className='superContainer'>
            <div className='contactHeader'>
                Leave Us a Message
            </div>

            <div className='formContainer'>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='client_name' placeholder='Full Name' required />                    
                    <input type='email' name='client_email' placeholder='Email' required />
                    <input type='text' name='subject' placeholder='Subject' required />

                    <textarea name='message' cols='30' rows='10' placeholder='Message'></textarea>

                    <div id='msgConfirmation' className='hide'></div>
                    
                    <button type='submit' className='submitBtn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
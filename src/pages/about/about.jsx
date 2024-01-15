import './about.css'
import { ContactForm } from '../../components/contactForm/contactForm'
import aboutImage from '../../assets/about.jpeg'
import quotationMarks from '../../assets/quotation-marks.png'
import jhoan from '../../assets/jhoan-testimonial.jpeg'
import michael from '../../assets/michael-testimonial.png'
import rudy from '../../assets/rudy-testimonial.jpeg'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const About = () => {
    const { state } = useLocation()
    const { targetId } = state || {}

    useEffect(() => {
        const element = document.getElementById(targetId)

        if(element) {
            document.documentElement.setAttribute('class', 'smoothScroll')
            element.scrollIntoView()
            window.history.replaceState({}, '')
        } else {
            document.documentElement.classList.remove('smoothScroll')
            window.scrollTo(0, 0)
        }
    }, [state])

    

    return (
        <div className='aboutContainer'>
            <div className='topSection'>
                <div className='aboutTitle'>
                    About Us
                </div>

                <div className='aboutSubtitle'> 
                    We help people get into the vehicle they want at a price they can afford.
                </div>
            </div>


            <div className='gridContainer'>
                <div className='aboutSection'>
                    <div className='aboutInfo'>
                        <div className='aboutSectionTitle'>
                            Welcome to Fort Myers Auto Enterprise
                        </div>

                        <div className='sectionText'>
                            With years of experience serving the area, our dealership is dedicated to offering high-quality, pre-owned vehicles to our customers. From the moment you walk through our door, we’re committed to providing you with a great car-buying experience. With our skilled sales staff and financing options, we’ll help you get the vehicle you want, at the great price you deserve. <br></br> <br></br>
                            Our goal is for you to be so delighted with your vehicle purchase that you’ll come see us when you need your next car and will happily recommend us to friends and family. Customer referrals are the ultimate compliment.With many vehicle shopping options available, we differentiate ourselves by understanding our local car-buying community and satisfying its needs; helping valued local customers like you, find the vehicle that’s the “right fit”. <br></br> <br></br>
                            Feel free to browse our inventory online and check out the New Arrivals section on our homepage. If you see a vehicle you like, submit an online quote request, or contact us to schedule a test drive. <br></br> <br></br>
                            To learn more about our dealership and how we can help with your next vehicle purchase, please call or stop by in person. We look forward to meeting you.
                        </div>
                    </div>

                    <div className='aboutImageContainer'>
                        <img src={aboutImage} />
                    </div>
                </div>
            </div>

            <div className='testimonialsContainer'>
                <div className='topSection'>
                    <div className='testimonialsTitle'>
                        Testimonials
                    </div>

                    <div className='aboutSubtitle'> 
                        What our clients say about us.
                    </div>
                </div>
                
                <div className='gridContainer'>
                    <div className='testimonialsSection'>
                        <div className='testimonial'>
                            <div className='quotationMark'>
                                <img src={quotationMarks} />
                            </div>

                            <div className='quote'>
                                Great pricing, and friendly bilingual staff.
                                Even though I had bad credit they were able to find me a Toyota Camry from 2010 that I could afford.
                                It's been 6 months and I haven't had a single issue.
                            </div>

                            <div className='authorInfo'>
                                <div className='authorPic'>
                                    <img src={rudy} />
                                </div>

                                <div className='authorName'>
                                    Rudy Pichardo
                                </div>
                            </div>
                        </div>

                        <div className='testimonial'>
                            <div className='quotationMark'>
                                <img src={quotationMarks} />
                            </div>

                            <div className='quote'>
                                Smooth buying experience! Very happy with our purchase and would definitely buy from again.
                            </div>

                            <div className='authorInfo'>
                                <div className='authorPic'>
                                    <img src={michael} />
                                </div>

                                <div className='authorName'>
                                    Michael Palestrini
                                </div>
                            </div>
                        </div>

                        <div className='testimonial'>
                            <div className='quotationMark'>
                                <img src={quotationMarks} />
                            </div>

                            <div className='quote'>
                                Visited the dealership not planning on buying anything, but they had such great deals I couldn’t resist and ended up with a brand new truck. 
                                All of the staff were happy and friendly people, thank you for all your help you've made a customer for life!
                            </div>

                            <div className='authorInfo'>
                                <div className='authorPic'>
                                    <img src={jhoan} />
                                </div>

                                <div className='authorName'>
                                    Jhoan Martinez
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contactContainer' id='contactForm'>
                <div className='topSection'>
                    <div className='aboutTitle'>
                        Contact Us
                    </div>

                    <div className='aboutSubtitle'> 
                        Tambien hablamos español.
                    </div>
                </div>

                <div className='contactSection'>
                    <ContactForm />

                    <div className='contactInfoContainer'>
                        <div className='contactInfoText'>
                            <div className='contactInfoSubtitle'>
                                Fort Myers Auto Enterprise
                            </div>

                            <div className='address'>
                                3036 Palm Beach Blvd <br></br>
                                Fort Myers, FL 33916
                            </div>

                            <div>
                                Sales: (123) 456-7890 <br></br> 
                                Parts: (123) 456-7890 <br></br> 
                                Service: (123) 456-7890 <br></br> 
                            </div>

                            <div className='email'>
                                fmautoenterprise@outlook.com
                            </div>
                        </div>
                        
                        <div className='hoursOfOperation'>
                            <div className='contactInfoSubtitle'>
                                Hours
                            </div>

                            <div className='hoursSection'>
                                <div>
                                    <div className='day'>Monday</div>
                                    <div className='day'>Tuesday</div>
                                    <div className='day'>Wednesday</div>
                                    <div className='day'>Thursday</div>
                                    <div className='day'>Friday</div>
                                    <div className='day'>Saturday</div>
                                    <div className='day'>Sunday</div>
                                </div>

                                <div>
                                    <div className='time'>9AM - 6PM</div>
                                    <div className='time'>9AM - 6PM</div>
                                    <div className='time'>9AM - 6PM</div>
                                    <div className='time'>9AM - 6PM</div>
                                    <div className='time'>9AM - 6PM</div>
                                    <div className='time'>9AM - 5PM</div>
                                    <div className='time'>Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14263.29239256674!2d-81.8518243!3d26.6541459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db6bb5890a7f6b%3A0x71ab59cf0e6dd48!2sMM%20Auto%20Enterprise%20Inc!5e0!3m2!1sen!2sus!4v1697055052492!5m2!1sen!2sus" width="100%" height="100%" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
import './home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Cards } from '../../components/cards/cards';
import lease from '../../assets/lease.webp';
import sell from '../../assets/sell.avif';
import service from '../../assets/service.jpeg';
import vehicles from '../../assets/pre-owned.jpeg';
import salesman from '../../assets/salesman.jpeg';

export const Home = () => {
    const navigate = useNavigate()
    const [listOfCars, setListOfCars] = useState([])

    useEffect(() => {
        axios.get('https://fm-cars-mern-app-94ba32793065.herokuapp.com/cars/newArrivals').then((response) => {
            setListOfCars(response.data)
        })
    }, [])
    
    return (
        <div>
            <div className='welcomeBanner'>
                <div className='title'>
                    WELCOME TO FORT MYERS CARS
                </div>

                <div className='subtitle'>
                    Home to the best prices and best selection of pre-owned vehicles in SWFL.
                </div>  
            </div>

            <div className='newArrivals'>
                <div className='title'>
                    New Arrivals
                </div>

                <Cards listOfCars={listOfCars} />
            </div>

            <div className='options'>
                <div className='squares'>
                    <div className='square' onClick={() => { 
                        navigate('/about', { state: { targetId: 'contactForm' } }) 
                    }}>
                        <img src={lease} loading='lazy' />
                        <div className='text'>
                            Apply for Credit
                        </div>
                    </div>

                    <div className='square' onClick={() => navigate('/sellCar')}>
                        <img src={sell} loading='lazy' />
                        <div className='text'>
                            We'll Buy Your Car
                        </div>
                    </div>

                    <div className='square' onClick={() => navigate('/booking')}>
                        <img src={service} loading='lazy' />
                        <div className='text'>
                            Schedule Service
                        </div>
                    </div>

                    <div className='square' onClick={() => navigate('/inventory')}>
                        <img src={vehicles} loading='lazy' />
                        <div className='text'>
                            Pre-Owned Vehicles
                        </div>
                    </div>
                </div>

                <div className='sliderContainer'>
                    <div className='slide'>
                        <img src={salesman} loading='lazy' />

                        <div className='text'>
                            <div>
                                Let us know exactly what you're looking for.
                                <br></br>We may be able to help you get into the ride you want.
                            </div>

                            <button className='carFinderBtn' onClick={() => navigate('/carFinder')}>
                                Car Finder
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='bioContainer'>
                    <div className='schedule'>
                        <h1>GET IN TOUCH</h1>
                        <p>Contact Us</p>
                        <h3>(123) 456-7890</h3>

                        <div className='hours'>
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

                    <div className='bio'>
                        <h1>Fort Myers Cars</h1>

                        <div className='text'>
                            Serving Southwest Florida: Bonita Springs, Naples, and beyond. We are dedicated to providing the ultimate automobile buying experience.
                            <br></br>Our dealership is your #1 source for purchasing quality pre-owned vehicles.
                            We have extensive relationships in the dealer community allowing us to purchase a wide variety of lease returns and new car trades at exceptional values.
                            This enables us to pass along huge savings on the highest quality vehicles of your choice.
                            In addition, we offer a full array of financing options to meet your needs.
                            <br></br>If you need help with any aspect of the buying process, please don’t hesitate to contact us.
                        </div>

                        <button className='learnMoreBtn' onClick={() => navigate('/about') }>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14263.29239256674!2d-81.8518243!3d26.6541459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db6bb5890a7f6b%3A0x71ab59cf0e6dd48!2sMM%20Auto%20Enterprise%20Inc!5e0!3m2!1sen!2sus!4v1697055052492!5m2!1sen!2sus" width="100%" height="100%" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
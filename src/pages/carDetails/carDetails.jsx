import './carDetails.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContactForm } from '../../components/contactForm/contactForm'
import { Cards } from '../../components/cards/cards'

export const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [suggestedCars, setSuggestedCars] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(`https://fm-cars-mern-app-94ba32793065.herokuapp.com/cars/id/${id}`).then((response) => {
            setCar(response.data)
        })

        axios.get('https://fm-cars-mern-app-94ba32793065.herokuapp.com/cars/random').then((response) => {
            setSuggestedCars(response.data)
        })
    }, [id])


    return (
        <div>
            <img src={car.imagePath} className='carImage'/>

            <div className='carDetailsHeader'>
                <div className='carYMM'>
                    <div className='sub'>
                        Pre-Owned {car.year} {car.make}
                    </div>

                    <div className='main'>
                        {car.model}
                    </div>
                </div>
                
                <div className='carPrice'>
                    ${car.price}
                </div>
            </div>

            <div className='vehicleInfo'>
                <div className='col1'>
                    <div className='carProp'>
                        Exterior Color <span className='inlineInfo'>{car.color}</span>
                    </div>

                    <div className='carProp'>
                        Interior Color <span className='inlineInfo'>Black</span>
                    </div>

                    <div className='carProp'>
                        Odometer <span className='inlineInfo'>{car.mileage} miles</span>
                    </div>

                    <div className='carProp'>
                        Fuel Economy <span className='inlineInfo'>{car.cityMiles}/{car.highwayMiles} MPG City/Hwy</span>
                    </div>
                </div>
                
                <div className='col2'>
                    <div className='carProp'>
                        Transmission <span className='inlineInfo'>A/T</span>
                    </div>

                    <div className='carProp'>
                        Engine <span className='inlineInfo'>{car.engine}</span>
                    </div>

                    <div className='carProp'>
                        VIN <span className='inlineInfo'>4T1BF3EK9BU227925</span>
                    </div>

                    <div className='carProp'>
                        Stock Number <span className='inlineInfo'>BU227925</span> 
                    </div>
                </div>
            </div>

            <div className='featuresRow'>
                <div className='featuresContainer'>
                    <div className='featuresList'>
                        <div className='featuresHeader'>
                            Highlighted Features
                        </div>

                        <ul>
                            <li>Split folding rear seat</li>
                            <li>Remote keyless entry</li>
                            <li>Steering wheel mounted audio controls</li>
                            <li>Fully automatic headlights</li>
                            <li>Power driver seat</li>
                        </ul>
                    </div>

                    <ContactForm />
                </div>
            </div>

            <div className='suggestedRow'>
                <div className='recommendedHeader'>
                    Also Recommended for You...
                </div>

                <div className='suggestedContainer'>
                    <Cards listOfCars={suggestedCars} />
                </div>
            </div>
        </div>
    )
}
import './cards.css';
import { useNavigate } from 'react-router-dom';

export const Cards = (props) => {
    const navigate = useNavigate()

    return (
        <div className='cards'>
            {props.listOfCars.map((val, key) => {
                return (
                    <div className='card' key={`car-${val.id}`}>
                        <div className='imageContainer'>
                            <img src={val.imagePath} loading='lazy' />

                            <div className='test'>
                                <button className='viewDetailsBtn' onClick={() => navigate(`/carDetails/${val.id}`)}>View Details</button>
                            </div>
                        </div>
                        
                        <div className='info'>
                            <div className='year-make-model'>
                                {val.year} {val.make} {val.model}
                            </div>

                            <div className='price'>
                                ${val.price}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
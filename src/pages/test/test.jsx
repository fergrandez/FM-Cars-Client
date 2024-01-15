import './test.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Cards } from '../../components/cards';
import { Sort } from '../../components/sort';
import { Filter } from '../../components/filter';

export const Test = () => {
    const [carList, setCarList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        axios.get('http://localhost:3001/cars/get', { params: searchParams }).then((response) => {
            setCarList(response.data)
        })
    }, [searchParams])


    return (
        <div>
            <div className='topRow'>
                <div className='title'>
                    Pre-Owned Inventory
                </div>

                <div className='info'>
                    <div>{carList.length} Vehicles</div>
                    <Sort />
                </div>
            </div>

            <div className='mainContent'>
                <div className='sidebar'>
                    <Filter />
                </div>
                
                <div className='cardsContainer'>
                    <Cards listOfCars={carList} />
                </div>
            </div>
        </div>
    )
}
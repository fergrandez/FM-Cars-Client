import './inventory.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Cards } from '../../components/cards/cards';
import { Sort } from '../../components/filter-sort-options/sort';
import { Filter } from '../../components/filter-sort-options/filter';

export const Test = () => {
    const [carList, setCarList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        axios.get('https://fm-cars-mern-app-94ba32793065.herokuapp.com/cars/get', { params: searchParams }).then((response) => {
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
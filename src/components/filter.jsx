import { useEffect, useState } from 'react';
import axios from 'axios';
import dropdown from '../assets/drop-down.png';
import { Options } from './options';
import './filter.css';

export const Filter = (props) => {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/cars/test').then(response => {
            setCategories(response.data)
        })
    }, []) 

    const [visibleDropdowns, setVisibleDropdowns] = useState(() => {
        const data = window.localStorage.getItem('FILTER_DROPDOWNS')

        return data !== null ? JSON.parse(data) : {}
    })

    useEffect(() => {
        window.localStorage.setItem('FILTER_DROPDOWNS', JSON.stringify(visibleDropdowns))
    }, [visibleDropdowns])


    const handleClick = (prop) => {
        if(visibleDropdowns.hasOwnProperty(prop)) {
            setVisibleDropdowns({
                ...visibleDropdowns,
                [prop]: !visibleDropdowns[prop]
            })
        } else {
            setVisibleDropdowns({
                ...visibleDropdowns,
                [prop]: true
            })
        }
    }

    return (
        <div className='filter'>
            <div className='container'>
                <div className='heading'>
                    Refine Search
                </div>

                {Object.keys(categories).map((category) => (
                    <div className='category'>
                        <div className='info' onClick={ () => handleClick(category) }>
                            {category.includes('Miles') ? (
                                <div>{category.substring(0, category.length - 5).concat(' ', category.substring(category.length - 5)).toLowerCase()}</div>
                            ) : 
                            (
                                <div>{category}</div>
                            )}
                            <img src={dropdown} className='icon' />
                        </div>

                        {visibleDropdowns[category] && (
                            <Options category={category} type={categories[category]} /> 
                        )}
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
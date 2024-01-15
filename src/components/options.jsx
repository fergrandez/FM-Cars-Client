import './options.css'
import axios from "axios"
import { RangeSlider } from './slider'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Options = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [options, setOptions] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/cars/unique/${props.category}`).then(response => {
            setOptions(response.data)
        })
    }, [])

    const updateSearchParams = (key, value) => {
        setSearchParams(prevParams => {
            prevParams.has(key, value) ? prevParams.delete(key, value) : prevParams.append(key, value)
            return prevParams
        })
    }

    

    
    return (
        <div className='drop'>
            {props.type === 'STRING' ? (
                options.map((option) => (
                    <div onClick={() => updateSearchParams(props.category, option)}>
                        <input type='checkbox' checked={searchParams.has(props.category, option)} />
                        <label>{option}</label>
                    </div>
                ))
            ) : (
                <RangeSlider prop={props.category} />
            )}
        </div>
    )
}
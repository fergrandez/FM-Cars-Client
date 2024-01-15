import axios from 'axios'
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const RangeSlider = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleChange = (event) => {
        setUpperBound(event.target.value)
    }

    const updateSearchParams = () => {
        setSearchParams(prevParams => {
            upperBound === max ? prevParams.delete(`max${props.prop}`) : prevParams.set(`max${props.prop}`, upperBound)
            return prevParams
        })
    }

    const [min, setMin] = useState(null)
    const [max, setMax] = useState(null)
    const [upperBound, setUpperBound] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3001/cars/minMax/${props.prop}`).then((response) => {
            const { min, max } = response.data
            setUpperBound(max)
            setMin(min)
            setMax(max)
        })
    }, [])

    return (
        <Box sx={{width:'94%', paddingTop:'12px'}}>
            <Slider min={min} max={max} value={upperBound} valueLabelDisplay='auto' onChange={handleChange} onChangeCommitted={updateSearchParams} />

            {props.prop === 'price' ? (
                <div>${upperBound}</div>
            ) : 
            (
                <div>{upperBound}</div>
            )}
        </Box>
    )
}
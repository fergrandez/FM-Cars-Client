import './sort.css'
import { useSearchParams } from 'react-router-dom';

export const Sort = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSelect = (event) => {
        const data = event.target.value

        if(data === 'default') {
            setSearchParams(prevParams => {
                prevParams.delete('sort')
                prevParams.delete('order')
                return prevParams
            })
        } else {
            const [sort, order] = data.split(' ')
            const sortBy = {
                sort,
                order
            }

            for(const [key, value] of Object.entries(sortBy)) {
                setSearchParams(prevParams => {
                    prevParams.has(key) && prevParams.delete(key)
                    prevParams.append(key, value)
                    return prevParams
                })
            }
        }
    }

    return (
        <select id='sortBy' onChange={handleSelect} className='sort'>
            <option value='default'>Sort by</option>
            <option value='year ASC'>Year Old to New</option>
            <option value='year DESC'>Year New to Old</option>
            <option value='price ASC'>Price Low to High</option>
            <option value='price DESC'>Price High to Low</option>
            <option value='mileage ASC'>Mileage Low to High</option>
            <option value='mileage DESC'>Mileage High to Low</option>
        </select>
    )
}
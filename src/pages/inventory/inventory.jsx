// import './inventory.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Cards } from '../../components/cards';
// import { Slider } from '../../components/slider';
// import dropdown from '../../assets/drop-down.png';

// export const Inventory = () => {
//     const [searchParams, setSearchParams] = useSearchParams()

//     const updateSearchParams = (key, value) => {
//         setSearchParams(searchParams => {
//             if(key === 'sort' || key === 'order') {
//                 if(searchParams.has(key)) {
//                     searchParams.delete(key)
//                 }
//                 searchParams.append(key, value)
//             } else if(searchParams.has(key, value)) {
//                 searchParams.delete(key, value)
//             } else {
//                 searchParams.append(key, value)
//             }

//             return searchParams
//         })
//     }

//     const [visibleDropdowns, setVisibleDropdowns] = useState(() => {
//         const data = window.localStorage.getItem('FILTER_DROPDOWNS')

//         return data !== null ? JSON.parse(data) : {}
//     })

//     useEffect(() => {
//         window.localStorage.setItem('FILTER_DROPDOWNS', JSON.stringify(visibleDropdowns))
//     }, [visibleDropdowns])


//     const [fullList, setFullList] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:3001/cars').then((response) => {
//             setFullList(response.data)
//         })
//     }, [])

//     const [maxes, setMaxes] = useState({})
//     useEffect(() => {
//         const columns = ['price', 'mileage', 'highwayMiles']

//         Promise.all(columns.map(column => axios.get(`http://localhost:3001/cars/max/${column}`).then((response) => {
//             return {
//                 [column]: response.data
//             }
//         }))).then((data) => {
//             const results = {}
//             data.forEach(item => {
//                 const key = Object.keys(item)[0]
//                 const val = Object.values(item)[0]
//                 results[key] = val
//             })

//             return results
//         }).then((val) => setMaxes(val))
//     }, [])

//     const [listOfCars, setListOfCars] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:3001/cars', { params: searchParams }).then((response) => {
//             setListOfCars(response.data)
//         })
//     }, [searchParams])


//     const unique = (property) => {
//         let seen = {}

//         fullList.filter((car) => {
//             return seen.hasOwnProperty(car[property]) ? false : (seen[car[property]] = true)
//         })

//         return Object.keys(seen)
//     } 

//     const years = unique('year')
//     const makes = unique('make')
//     const colors = unique('color')
//     const engines = unique('engine')

//     const handleClick = (str) => {
//         if(visibleDropdowns.hasOwnProperty(str)) {
//             setVisibleDropdowns({
//                 ...visibleDropdowns,
//                 [str]: !visibleDropdowns[str]
//             })
//         } else {
//             setVisibleDropdowns({
//                 ...visibleDropdowns,
//                 [str]: true
//             })
//         }
//     }


//     const handleSelect = (event) => {
//         const data = event.target.value

//         if(data === 'default') {
//             setSearchParams(searchParams => {
//                 searchParams.delete('sort')
//                 searchParams.delete('order')

//                 return searchParams
//             })
//         } else {
//             const pair = data.split(' ')

//             const sortBy = {
//                 sort: pair[0],
//                 order: pair[1]
//             }
    
//             for(const [key, value] of Object.entries(sortBy)) {
//                 updateSearchParams(key, value)
//             }
//         }   
//     }









//     return (
//         <div>
//             <div className='topRow'>
//                 <div className='title'>
//                     Pre-Owned Inventory
//                 </div>

//                 <div className='info'>
//                     <div>{listOfCars.length} Vehicles</div>

//                     <select id='sortBy' onChange={handleSelect}>
//                         <option value='default'>Sort by</option>
//                         <option value='year ASC'>Year Old to New</option>
//                         <option value='year DESC'>Year New to Old</option>
//                         <option value='price ASC'>Price Low to High</option>
//                         <option value='price DESC'>Price High to Low</option>
//                         <option value='mileage ASC'>Mileage Low to High</option>
//                         <option value='mileage DESC'>Mileage High to Low</option>
//                     </select>
//                 </div>
//             </div>
            
//             <div className='mainContent'>
//                 <div className='filter'>
//                     <div className='container'>
//                         <div className='title'>
//                             Refine Search
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('year') }>
//                                 <div>Year</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns.year && (
//                                 <div className='drop'>
//                                     {years.map((year) => 
//                                         (<div onClick={() => {
//                                             updateSearchParams('year', year)
//                                         }}>
//                                             <input type='checkbox' checked={searchParams.has('year', year)} name='year' value={year}></input>
//                                             <label>{year}</label>
//                                         </div>)
//                                     )}
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('make') }>
//                                 <div>Make</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['make'] && (
//                                 <div className='drop'>
//                                     {makes.map((make) =>
//                                         (<div onClick={() => {
//                                             updateSearchParams('make', make)
//                                         }}>
//                                             <input type='checkbox' checked={searchParams.has('make', make)} name='make' value={make}></input>
//                                             <label>{make}</label>
//                                         </div>)
//                                     )}
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('mileage') }>
//                                 <div>Mileage</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['mileage'] && (
//                                 <div className='drop'>
//                                     <Slider max={maxes.mileage} step={1000} />
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('price') }>
//                                 <div>Price</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['price'] && (
//                                 <div className='drop'>
//                                     <Slider max={maxes.price} step={500} />
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('color') }>
//                                 <div>Color</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['color'] && (
//                                 <div className='drop'>
//                                     {colors.map((color) =>
//                                         (<div onClick={() => {
//                                             updateSearchParams('color', color)
//                                         }}>
//                                             <input type='checkbox' checked={searchParams.has('color', color)} name='color' value={color}></input>
//                                             <label>{color}</label>
//                                         </div>)
//                                     )}
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('engine') }>
//                                 <div>Engine</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['engine'] && (
//                                 <div className='drop'>
//                                     {engines.map((engine) =>
//                                         (<div onClick={() => {
//                                             updateSearchParams('engine', engine)
//                                         }}>
//                                             <input type='checkbox' checked={searchParams.has('engine', engine)} name='engine' value={engine}></input>
//                                             <label>{engine}</label>
//                                         </div>)
//                                     )}
//                                 </div>  
//                             )}
//                         </div>

//                         <div className='category'>
//                             <div className='info' onClick={ () => handleClick('MPG') }>
//                                 <div>MPG</div>
//                                 <img src={dropdown} className='icon' />
//                             </div>

//                             {visibleDropdowns['MPG'] && (
//                                 <div className='drop'>
//                                     <Slider max={maxes.highwayMiles} />
//                                 </div>  
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <Cards listOfCars={listOfCars} className='cards' />
//             </div>

            
//         </div>
//     )
// }
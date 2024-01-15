import { useEffect, useState } from 'react'
import './sellCar.css'

export const SellCar = () => {
    const [loading, setLoading] = useState(true)

    const finishedLoading = () => {
        setLoading((prev) => !prev)
    }

    return (
        <div className='sellCarContainer'>
            {loading ? (
                <div className='loader'>
                    <div></div>
                </div>
            ) : null}
            <iframe id='kbb' onLoad={finishedLoading} scrolling='no' frameborder='0' src='https://www.kbb.com/instant-cash-offer/?Lp=73111D1C-71E5-4563-8EED-03932B322D6C&OfferCode=B&zip=[zipcode]&LNX=TIMKBBGNAVCV' title='Instant Cash Offer'></iframe>
        </div>
    )
}
import './carFinder.css'

export const CarFinder = () => {
    return (
        <div className="carFinderContainer">
            <div className='carFinderTitle'>
                Car Finder
            </div>

            <div className='carFinderSubtitle'>
                Let us know exactly what you're in the market for and we'll help you find it.
            </div>

            <div className="finderFormContainer">
                <form className='carFinderForm'>
                    <div className='formSection'>
                        <div className='alignLeft'>Vehicle Information</div>

                        <div className='line'>
                            <input name='year' type='text' placeholder='Year' required />
                            <input name='make' type='text' placeholder='Make' required />
                            <input name='model' type='text' placeholder='Model' required />
                            <input name='mileage' type='text' placeholder='Mileage' required />
                        </div>
                    </div>

                    <div className='formSection'>
                        <div className='alignLeft'>Desired Vehicle</div>

                        <div className='stack'>
                            <input name='priceRange' type='text' placeholder='Price Range' required />
                            <textarea name='desiredFeatures' cols='30' rows='10' placeholder='Desired Features'></textarea>
                        </div>
                    </div>

                    <div className='formSection'>
                        <div className='alignLeft'>How Do We Reach You</div>

                        <div className='line'>
                            <input name='name' type='text' placeholder='Name' required />
                            <input name='phone' type='text' placeholder='Phone' required />
                            <input name='email' type='email' placeholder='Email' required />
                        </div>
                        
                        <div className='stack'>
                            <textarea name='comments' cols='30' rows='10' placeholder='Comments'></textarea>
                        </div>
                    </div>

                    <div className='formSection'>
                        By clicking "Submit", I consent to be contacted by the dealer at any telephone number or email I provide, including, without limitation, communications sent via text message to my cell phone or communications sent using an autodialer or prerecorded message.
                        This acknowledgment constitutes my written consent to receive such communications. I have read and agree to the Privacy Policy of this dealer.
                    </div>

                    <button type='submit' className='carFinderSubmit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
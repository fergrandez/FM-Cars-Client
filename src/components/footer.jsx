import './footer.css';
import location from '../assets/location.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import phone from '../assets/phone.png';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='col'>
                    <div className='title'>
                        Store Location
                    </div>

                    <div className='content'>
                        <img src={location} className='location' loading='lazy' />

                        <div>
                            3036 Palm Beach Blvd,
                            <br></br>Fort Myers, FL 33916
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='title'>
                        Store Hours
                    </div>

                    <div className='footerHours'>
                        <div>
                            <span style={{fontWeight: 'bold'}}>Mon - Fri:</span> 9:00 AM - 6:00 PM
                        </div>

                        <div>
                            <span style={{fontWeight: 'bold'}}>Sat:</span> 9:00 AM - 5:00 PM
                        </div>

                        <div>
                            <span style={{fontWeight: 'bold'}}>Sun:</span> Closed
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='title'>Follow Us</div>

                    <div className='content'>
                        <div className='facebookContainer'>
                            <img src={facebook} loading='lazy' />
                        </div>

                        <div className='instaContainer'>
                            <img src={insta} loading='lazy' />
                        </div>
                    </div>  
                </div>

                <div className='col'>
                    <div className='title'>Call Us</div>

                    <div className='contactContent'>
                        <div className='phoneContainer'>
                            <img src={phone} loading='lazy' />
                        </div>
                        
                        <div>
                            Phone 1: (123) 456-7890
                            <br></br>
                            Service 1: (123) 456-7890
                            <br></br>
                            Service 2: (123) 456-7890
                            <br></br>
                            Phone 2: (123) 456-7890
                        </div>
                    </div>
                </div>
            </div>

            <div className='middle'>
                <div>Home</div>
                <div>Available Vehicles</div>
                <div>Apply Online</div>
                <div>Car Finder</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div>Privacy Policy</div>
            </div>

            <div className='bottom'>
                <div>&copy; 2023 MM Auto Enterprise Inc.</div>
                <div>Website by Fernando Grandez</div>
            </div>
        </div>
    );
}
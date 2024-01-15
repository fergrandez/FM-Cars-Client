import './navbar.css';
import logo from '../assets/car-logo.png';
import dropdown from '../assets/drop-down.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
    const navigate = useNavigate()

    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }

    const handleMouseLeave = () => {
        setDropdownVisible(false)
    }


    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/'>
                    <img src={logo} className='logo' loading='lazy' />
                </Link>

                <Link to='/inventory'>
                    Cars for Sale
                </Link>

                <Link to='/about'>
                    About
                </Link>

                <div className='more' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='container'>
                        <span>More</span>
                        <img src={dropdown} className='dropdownIcon' />
                    </div>

                    {isDropdownVisible && (
                        <div className='dropdown'>
                            <div className='option'>
                                <Link to='/'>
                                    Option #1
                                </Link>
                            </div>
                            <div className='option'>
                                <Link to='/'>
                                    Option #2
                                </Link>
                            </div>
                            <div className='option'>
                                <Link to='/'>
                                    Option #3
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='right'>
                <a onClick={() => { 
                    navigate('/about', { state: { targetId: 'contactForm' } }) 
                }}>
                    Contact Us
                </a>
            </div>
        </div>
    );
}


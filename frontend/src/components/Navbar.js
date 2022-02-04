import { Link } from 'react-router-dom'

import '../stylesheets/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top'>
            <div className='container'>
                <img src='/img/logo1.png' alt='rymo logo' />
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span><i id='bar' className='fas fa-bars'></i></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-link'>Shop</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link'>Blog</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>Contact Us</Link>
                        </li>
                        <li className='nav-item search'>
                            <i className='fal fa-search'></i>
                        </li>
                        <li className='nav-item cart'>
                            <Link to='/cart' className='nav-link btn'>
                                <i className='fad fa-shopping-cart'></i>
                                <span className='cart-badge'>0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

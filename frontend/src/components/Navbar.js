import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../stylesheets/Navbar.css'

const Navbar = () => {
    const { cartItems } = useSelector(state => state.cart);
    const cartCount = cartItems.reduce((qty, e) => e.qty + qty, 0);

    const handleClick = e => {
        const tag = e.target.tagName;
        if (window.innerWidth < 992 && (tag === 'A' || tag === 'I')) {
            document.getElementsByClassName('navbar-collapse')[0].classList.remove('show');
        }
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top'>
            <div className='container'>
                <Link to='/'><img src='/img/logo1.png' alt='rymo logo' /></Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span><i id='bar' className='fas fa-bars'></i></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item' onClick={handleClick}>
                            <NavLink to='/'
                                className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item' onClick={handleClick}>
                            <NavLink to='/shop'
                                className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className='nav-item' onClick={handleClick}>
                            <NavLink to='/blog'
                                className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className='nav-item' onClick={handleClick}>
                            <NavLink to='/contact'
                                className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className='nav-item search' onClick={handleClick}>
                            <i className='fal fa-search'></i>
                        </li>
                        <li className='nav-item cart' onClick={handleClick}>
                            <NavLink to='/cart'
                                className={({ isActive }) => (isActive ? 'nav-link btn btn-active' : 'nav-link btn')}
                            >
                                <i className='fad fa-shopping-cart'></i>
                                <span className='cart-badge'>{cartCount}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

import { Link } from 'react-router-dom'

import '../App.css'

const Products = () => {
    return (
        <Link to={`/product/${1840291}`} className='col-lg-3 col-md-4 text-center product'>
            <img className='img-fluid mb-3' alt='' src='https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' />
            <div className='star'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
            </div>
            <h5 className='p-name'>Iphone 12</h5>
            <h4 className='p-price'>$1099</h4>
            <button className='buy-btn'>Buy Now</button>
        </Link>
    )
}

export default Products

import { Link } from 'react-router-dom'

import '../App.css'

const Product = ({ data: { _id: id, name, imageUrl, price } }) => {
    return (
        <Link to={`/product/${id}`} className='col-lg-3 col-md-4 text-center product'>
            <img className='img-fluid mb-3' alt={name} src={imageUrl} />
            <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
            </div>
            <h5 className='p-name'>{name}</h5>
            <h4 className='p-price'>${price}</h4>
            <button className='buy-btn'>Buy Now</button>
        </Link>
    )
}

export default Product

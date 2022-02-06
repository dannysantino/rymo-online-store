import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product'
import Loader from '../components/Loader'
import { getProducts as fetchProducts } from '../redux/actions/productActions';

import '../App.css'

const Shop = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.getProducts);
    const { loading, products, error } = data;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <section id='shop' className='py-5 my-5'>
            <div id='shop-bg'>
                <h2>Shop with Us</h2>
            </div>
            <div className='container mt-5 py-5'>
                <h2 className='fw-bold'>Featured Items</h2>
                <hr />
                <p>Check out our new line of featured products which are updated daily</p>
            </div>
            <div className='container'>
                <div className='row mx-auto'>
                    {loading
                        ? <Loader />
                        : error
                            ? <h5>{error}</h5>
                            : products.map(e => <Product data={e} key={e._id} />)
                    }
                    <nav aria-label='...'>
                        <ul className='pagination mt-5'>
                            <li className='page-item disabled'>
                                <span className='page-link'>Previous</span>
                            </li>
                            <li className='page-item active' aria-current='page'>
                                <span className='page-link'>1</span>
                            </li>
                            <li className='page-item'><Link to='#' className='page-link'>2</Link></li>
                            <li className='page-item'><Link to='#' className='page-link'>3</Link></li>
                            <li className='page-item'><Link to='#' className='page-link'>Next</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Shop

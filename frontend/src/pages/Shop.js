import { Link } from 'react-router-dom'

import Products from '../components/Products'

import '../App.css'

const Shop = () => {
    return (
        <section id="shop" className="py-5 my-5">
            <div className="container mt-5 py-5">
                <h2 className="fw-bold">Featured Items</h2>
                <hr />
                <p>Check out our new line of featured products which are updated daily</p>
            </div>
            <div className="container">
                <div className='row mx-auto'>
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <nav aria-label="...">
                        <ul className="pagination mt-5">
                            <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                            </li>
                            <li className="page-item active" aria-current="page">
                                <span className="page-link">1</span>
                            </li>
                            <li className="page-item"><Link to='#' className="page-link">2</Link></li>
                            <li className="page-item"><Link to='#' className="page-link">3</Link></li>
                            <li className="page-item"><Link to='#' className="page-link">Next</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Shop

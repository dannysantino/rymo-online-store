import { Link } from 'react-router-dom'

import Featured from '../components/Featured'

import '../App.css'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className='container'>
                    <h5>NEW ARRIVALS</h5>
                    <h1><span className='d-block d-md-inline'>Best Prices </span>This Year</h1>
                    <p className='mb-4'>Shop our wide range of comfortable outfits <br /> for all seasons and styles</p>
                    <Link to='/shop' className='custom-btn'>Shop Now</Link>
                </div>
            </section>

            <section id='brand' className='container'>
                <div className='row m-0 py-5'>
                    <img src='/img/brand/1.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-right-check' />
                    <img src='/img/brand/2.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-cinderella' />
                    <img src='/img/brand/3.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-sls-business' />
                    <img src='/img/brand/4.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-comedy' />
                    <img src='/img/brand/5.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-right-check' />
                    <img src='/img/brand/6.png' className='img-fluid col-6 col-md-4 col-lg-2' alt='brand-skill-star' />
                </div>
            </section>

            <section id='new' className='w-100'>
                <div className='row p-0 m-0'>
                    <div className='col-12 col-lg-4 one px-3'>
                        <img src='/img/new/1.jpg' className='img-fluid' alt='pair of sneakers' />
                        <div className='details ps-5 ps-lg-4'>
                            <h2>Supreme Sneakers</h2>
                            <Link to='/shop' className='text-uppercase'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 one px-3'>
                        <img src='/img/new/3.jpg' className='img-fluid' alt='silver wrist watch' />
                        <div className='details'>
                            <h2>Timeless Timepieces</h2>
                            <Link to='/shop' className='text-uppercase'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 one px-3'>
                        <img src='/img/new/5.jpg' className='img-fluid' alt='woman in gray jacket with jewelry on fingers' />
                        <div className='details pe-5 pe-lg-4'>
                            <h2>Katie Koutoure</h2>
                            <Link to='/shop' className='text-uppercase'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id='featured' className='pb-5 my-5'>
                <div className='container text-center py-5'>
                    <h2>Featured Items</h2>
                    <hr className='mx-auto' />
                    <p>Check out our new line of featured products which are updated daily</p>
                </div>
                <div className='row container-fluid mx-auto'>
                    <Featured data={'featured'} />
                </div>
            </section>

            <section id='banner' className='py-5 my-5'>
                <div className='container'>
                    <h4>MID SEASON SALE</h4>
                    <h1 className='mb-4'>Autumn Collection<br />UP TO 20% OFF!</h1>
                    <Link to='/shop' className='text-uppercase shop-btn'>Shop Now</Link>
                </div>
            </section>

            <section id='clothes' className='my-5'>
                <div className='container text-center py-5'>
                    <h2>Dresses and Jumpsuits</h2>
                    <hr className='mx-auto' />
                    <p>Check out our new line of featured products which are updated daily</p>
                </div>
                <div className='row container-fluid mx-auto'>
                    <Featured data={'clothes'} />
                </div>
            </section>

            <section id='watches' className='my-5'>
                <div className='container text-center py-5'>
                    <h2>Wrist Watches</h2>
                    <hr className='mx-auto' />
                    <p>Check out our new line of featured products which are updated daily</p>
                </div>
                <div className='row container-fluid mx-auto'>
                    <Featured data={'watches'} />
                </div>
            </section>

            <section id='shoes' className='pb-5 my-5'>
                <div className='container text-center py-5'>
                    <h2>Men's Shoes</h2>
                    <hr className='mx-auto' />
                    <p>Check out our new line of featured products which are updated daily</p>
                </div>
                <div className='row container-fluid mx-auto'>
                    <Featured data={'shoes'} />
                </div>
            </section>
        </>

    )
}

export default Home

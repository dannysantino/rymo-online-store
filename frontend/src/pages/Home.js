import '../App.css'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className='container'>
                    <h5>NEW ARRIVALS</h5>
                    <h1><span>Best Price </span>This Year</h1>
                    <p>Shop our wide range of comfortable outfits <br /> for all seasons and styles</p>
                    <button>Shop Now</button>
                </div>
            </section>

            <section id='brand' className='container'>
                <div className='row m-0 py-5'>
                    <img src='/img/brand/1.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-right-check' />
                    <img src='/img/brand/2.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-cinderella' />
                    <img src='/img/brand/3.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-sls-business' />
                    <img src='/img/brand/4.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-comedy' />
                    <img src='/img/brand/5.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-right-check' />
                    <img src='/img/brand/6.png' className='img-fluid col-6 col-lg-2 col-md-4' alt='brand-skill-star' />
                </div>
            </section>

            <section id='new' className='w-100'>
                <div className='row p-0 m-0'>
                    <div className='col-md-4 col-12 one p-0'>
                        <img src='/img/new/1.jpg' className='img-fluid' alt='pair of sneakers' />
                        <div className='details psmd'>
                            <h2>Supreme Sneakers</h2>
                            <button className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>
                    <div className='col-md-4 col-12 one p-0'>
                        <img src='/img/new/3.jpg' className='img-fluid' alt='silver wrist watch' />
                        <div className='details'>
                            <h2>Timeless Timepieces</h2>
                            <button className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>
                    <div className='col-md-4 col-12 one p-0'>
                        <img src='/img/new/5.jpg' className='img-fluid' alt='woman in gray jacket with jewelry on fingers' />
                        <div className='details pe-5'>
                            <h2>Kiddie Kollection</h2>
                            <button className='text-uppercase'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home

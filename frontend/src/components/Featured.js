import { Link } from 'react-router-dom'

const Featured = ({ data }) => {
    return (
        <>
            {[...Array(4).keys()].map(e => {
                return (
                    <Link to='/shop' key={e + 1} className='col-lg-3 col-md-4 text-center product'>
                        <img src={`/img/${data}/${e + 1}.jpg`} className='img-fluid mb-3' alt={data + '-' + (e + 1)} />
                        <div className='stars'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </div>
                        <h5 className='p-name'>#{data + '-' + (e + 1)}</h5>
                        <h4 className='p-price'>${Math.floor(Math.random() * (80 - 40 + 1) + 40)}.99</h4>
                        <button to='/shop' className='buy-btn'>Buy Now</button>
                    </Link>
                )
            })}
        </>
    )
}

export default Featured

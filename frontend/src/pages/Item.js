import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getItem } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import Featured from '../components/Featured'
import Loader from '../components/Loader'

import '../App.css'

const Item = () => {
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const { loading, item, error } = useSelector(state => state.getItem);

    useEffect(() => {
        if (item && id !== item._id) {
            dispatch(getItem(id));
        }
    }, [dispatch, item, id]);

    const addToCartHandler = () => {
        dispatch(addToCart(item._id, qty))
            .then(res => {
                const alertBox = document.getElementById('alert-box');
                const alert = (item, type) => {
                    alertBox.innerHTML = `<div class='alert alert-${type} alert-dismissible fade show' role='alert'>
                                            <i class='bi bi-check-circle-fill'></i>
                                            <span class='fw-bold'>${item}</span> has been added to your cart!
                                            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                                        </div>`
                }
                alert(`${res}`, 'success');
            });
    }

    return (
        <>
            <section className='container pt-5 my-5 product-details'>
                <div className='row mt-5'>
                    {loading
                        ? <Loader />
                        : error
                            ? <h5>{error}</h5>
                            : (
                                <>
                                    <div className='col-lg-5 col-md-12'>
                                        <img src={item.imageUrl} id='main-img' className='img-fluid w-100 pb-1' alt='' />
                                        <div className='small-img-group'>
                                            <div className='small-img-col'>
                                                <img src={item.imageUrl} width='100%' className='small-img' alt='' />
                                            </div>
                                            <div className='small-img-col'>
                                                <img src={item.imageUrl} width='100%' className='small-img' alt='' />
                                            </div>
                                            <div className='small-img-col'>
                                                <img src={item.imageUrl} width='100%' className='small-img' alt='' />
                                            </div>
                                            <div className='small-img-col'>
                                                <img src={item.imageUrl} width='100%' className='small-img' alt='' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-12 pt-5 pt-lg-3'>
                                        <h6>Home / {item.name}</h6>
                                        <h3 className='py-4'>{item.name}</h3>
                                        <h2>${item.price}</h2>
                                        <p>Status: {item.countInStock > 0
                                            ? <span className='in-stock'>In stock</span>
                                            : <span className='out-of-stock'>Out of stock</span>}
                                        </p>
                                        <select className='size my-3'>
                                            <option>Select size</option>
                                            <option>Small</option>
                                            <option>Large</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </select>
                                        <div id='alert-box'></div>
                                        <select className='qty my-3' value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(item.countInStock).keys()].map(e => (
                                                <option key={e + 1} value={e + 1}>{e + 1}</option>
                                            ))}
                                        </select>
                                        <button className='buy-btn' onClick={addToCartHandler}>Add to cart</button>
                                        <h4 className='my-5'>Product details</h4>
                                        <span>{item.description}</span>
                                    </div>
                                </>
                            )
                    }
                </div>
            </section>

            <section id='related' className='pb-5 my-5'>
                <div className='container text-center py-5'>
                    <h2>Related Items</h2>
                    <hr className='mx-auto' />
                    <p>Check out our new line of featured products which are updated daily</p>
                </div>
                <div className='row container-fluid mx-auto'>
                    <Featured data={'featured'} />
                </div>
            </section>
        </>
    )
}

export default Item

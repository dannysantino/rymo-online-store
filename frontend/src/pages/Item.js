import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getItem } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

import '../App.css'

const Item = () => {
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const data = useSelector(state => state.getItem);
    const { loading, item, error } = data;

    useEffect(() => {
        if (item && id !== item._id) {
            dispatch(getItem(id));
        }
    }, [dispatch, item, id]);

    return (
        <section className='container pt-5 my-5 product-details'>
            <div className='row mt-5'>
                <div className='col-lg-5 col-md-12'>
                    <img src='/img/shop/1.jpg' id='main-img' className='img-fluid w-100 pb-1' alt='blue t-shirt' />
                    <div className='small-img-group'>
                        <div className='small-img-col'>
                            <img src='/img/shop/1.jpg' width='100%' className='small-img' alt='blue t-shirt' />
                        </div>
                        <div className='small-img-col'>
                            <img src='/img/shop/24.jpg' width='100%' className='small-img' alt='white t-shirt' />
                        </div>
                        <div className='small-img-col'>
                            <img src='/img/shop/25.jpg' width='100%' className='small-img' alt='red t-shirt' />
                        </div>
                        <div className='small-img-col'>
                            <img src='/img/shop/26.jpg' width='100%' className='small-img' alt='green t-shirt' />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12 pt-5 pt-lg-3'>
                    <h6>Home / T-Shirt</h6>
                    <h3 className='py-4'>Men's Fashion T-Shirt</h3>
                    <h2>$129.99</h2>
                    <p>Status: <span>In Stock</span></p>
                    <select className='my-3'>
                        <option>Select size</option>
                        <option>Small</option>
                        <option>Large</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                    <input type='number' defaultValue='1' />
                    <button className='buy-btn'>Add to cart</button>
                    <h4 className='my-5'>Product details</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure maiores ducimus fuga autem porro
                        minima voluptatibus quibusdam iusto enim rem, illum officia veritatis aperiam nisi ex similique
                        quasi exercitationem?
                        Exercitationem dolorem aperiam libero omnis voluptas excepturi deserunt, nihil laborum quidem atque
                        officia, neque similique repellat aliquam nostrum! Consequatur magni labore, officia voluptatibus ex
                        tenetur. Maiores fugit veniam ratione quaerat?</span>
                </div>
            </div>
        </section>
    )
}

export default Item

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { useTitle } from '../utils/hooks';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import CartItem from '../components/CartItem'

import '../App.css'

const Cart = () => {
    useTitle('Your Cart');

    let shippingFee = 12.99;

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    const cartTotal = cartItems.reduce((price, e) => (e.qty * e.price) + price, 0);

    const qtyChangeHandler = (id, qty) => dispatch(addToCart(id, Number(qty)));

    const removeHandler = id => dispatch(removeFromCart(id));

    return (
        <div id='cart' className='container pt-5 my-5'>
            <section className='header'>
                <h2 className='fw-bold pt-5'>Shopping Cart</h2>
                <hr />
            </section>

            {cartItems.length === 0
                ? (
                    <section id='empty-cart' className='container my-5'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <i className='fal fa-shopping-cart fa-5x pb-4'></i>
                                <h4 className='pb-5'>Your Cart is empty!</h4>
                                <Link to='/shop' className='shop-btn'>Shop now</Link>
                            </div>
                        </div>
                    </section>
                )
                : (
                    <>
                        <section id='cart-container' className='container my-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Remove</td>
                                                <td>Image</td>
                                                <td>Product</td>
                                                <td>Price</td>
                                                <td>Quantity</td>
                                                <td>Total</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map(e => (
                                                <CartItem
                                                    key={e._id}
                                                    data={e}
                                                    removeHandler={removeHandler}
                                                    qtyChangeHandler={qtyChangeHandler}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        <section id='cart-bottom' className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6 mb-4 coupon'>
                                    <div className='col-wrapper'>
                                        <h5>COUPON</h5>
                                        <p>Enter your coupon code if you have one</p>
                                        <input type='text' placeholder='Coupon code' />
                                        <button>Apply Coupon</button>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 total'>
                                    <div className='col-wrapper'>
                                        <h5>CART TOTAL</h5>
                                        <div className='d-flex justify-content-between'>
                                            <h6>Subtotal</h6>
                                            <p>${cartTotal.toFixed(2)}</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <h6>Shipping</h6>
                                            <p>${shippingFee}</p>
                                        </div>
                                        <hr className='second-hr' />
                                        <div className='d-flex justify-content-between'>
                                            <h6>Total</h6>
                                            <p>${(cartTotal + shippingFee).toFixed(2)}</p>
                                        </div>
                                        <button className='ms-auto'>Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default Cart

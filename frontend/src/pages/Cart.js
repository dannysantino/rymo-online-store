import CartItem from '../components/CartItem'

import '../App.css'

const Cart = () => {
    return (
        <div id='cart' className='container pt-5 my-5'>
            <section className='header'>
                <h2 className='fw-bold pt-5'>Shopping Cart</h2>
                <hr />
            </section>

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
                                <CartItem />
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
                                <p>$141.97</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h6>Shipping</h6>
                                <p>$12</p>
                            </div>
                            <hr className='second-hr' />
                            <div className='d-flex justify-content-between'>
                                <h6>Total</h6>
                                <p>$163.97</p>
                            </div>
                            <button className='ms-auto'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart

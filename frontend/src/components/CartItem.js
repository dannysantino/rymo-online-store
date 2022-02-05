import { Link } from 'react-router-dom'

const CartItem = () => {
    return (
        <tr>
            <td><Link to='#'><i className='fas fa-trash-alt'></i></Link></td>
            <td><img src='img/shoes/1.jpg' alt='' /></td>
            <td>
                <Link to={`/product/${1840291}`}><h5>Blue Sneakers</h5></Link>
            </td>
            <td>
                <h5>$46.99</h5>
            </td>
            <td><input type='number' className='w-25 ps-1' defaultValue='3' /></td>
            <td>
                <h5>$140.97</h5>
            </td>
        </tr>
    )
}

export default CartItem

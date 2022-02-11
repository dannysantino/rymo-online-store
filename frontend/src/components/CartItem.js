import { Link } from 'react-router-dom'

const CartItem = ({ data: { _id: id, name, imageUrl, price, countInStock, qty }, qtyChangeHandler, removeHandler }) => {
    return (
        <tr>
            <td>
                <button onClick={() => removeHandler(id)}>
                    <i className='fas fa-trash-alt'></i>
                </button>
            </td>
            <td>
                <img src={imageUrl} alt={name} />
            </td>
            <td>
                <Link to={`/product/${id}`}><h5>{name}</h5></Link>
            </td>
            <td>
                <h5>${price}</h5>
            </td>
            <td>
                <select
                    name='qty'
                    className='qty w-25 ps-1 my-3'
                    defaultValue={qty}
                    onChange={e => qtyChangeHandler(id, e.target.value)}
                >
                    {[...Array(countInStock).keys()].map(e => (
                        <option key={e + 1} value={e + 1}>{e + 1}</option>
                    ))}
                </select>
            </td>
            <td>
                <h5>${(price * qty).toFixed(2)}</h5>
            </td>
        </tr>
    )
}

export default CartItem

import { useDispatch } from 'react-redux'
import { removeFromCart, changeQuantity } from '../model/cartSlice'
import { formatCartPrice, getCartItemSubtotal } from '../lib/helpers'
import ProductImage from '../../../shared/ui/ProductImage'
import '../../../shared/styles/CartItem.css'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <ProductImage
          image={item.image}
          productId={item.id}
          title={item.title}
          className="cart-item-img"
        />
      </div>
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>{formatCartPrice(item.price)}</p>
      </div>
      <div className="cart-item-quantity">
        <button type="button" onClick={() => dispatch(changeQuantity({ id: item.id, delta: -1 }))}>
          −
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => dispatch(changeQuantity({ id: item.id, delta: 1 }))}>
          +
        </button>
      </div>
      <div className="cart-item-total">
        {formatCartPrice(getCartItemSubtotal(item))}
      </div>
      <button
        type="button"
        className="cart-item-remove"
        onClick={() => dispatch(removeFromCart(item.id))}
        aria-label="Видалити"
      >
        ×
      </button>
    </div>
  )
}

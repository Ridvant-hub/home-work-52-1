import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal, CartItem } from '../features/cart'
import { formatPrice } from '../utils/helpers'
import '../shared/styles/CartPage.css'

export default function CartPage() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Кошик</h1>
        <div className="cart-empty">
          <p>Ваш кошик порожній.</p>
          <Link to="/catalog" className="btn btn-primary">Перейти до каталогу</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Кошик</h1>
      <div className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <strong>Разом: {formatPrice(total)}</strong>
        <Link to="/checkout" className="btn btn-primary">Оформити замовлення</Link>
      </div>
    </div>
  )
}

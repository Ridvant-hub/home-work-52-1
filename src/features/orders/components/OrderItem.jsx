import { formatOrderPrice } from '../lib/helpers'
import '../../../shared/styles/OrderItem.css'

export default function OrderItem({ order }) {
  const total = order.items?.reduce((s, i) => s + i.price * i.quantity, 0) ?? order.total ?? 0

  return (
    <div className="order-item">
      <div className="order-item-header">
        <span className="order-item-id">Замовлення #{order.id.slice(-8)}</span>
        <span className="order-item-status">{order.status}</span>
      </div>
      <ul className="order-item-list">
        {order.items?.map((item) => (
          <li key={`${item.id}-${item.title}`}>
            {item.title} × {item.quantity} — {formatOrderPrice(item.price * item.quantity)}
          </li>
        ))}
      </ul>
      <p className="order-item-total">Разом: {formatOrderPrice(total)}</p>
    </div>
  )
}

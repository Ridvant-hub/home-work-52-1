import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal, clearCart } from '../features/cart'
import { addOrder } from '../features/orders'
import { formatPrice } from '../utils/helpers'
import '../shared/styles/CheckoutPage.css'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    dispatch(addOrder({ items: [...items], total, ...form }))
    dispatch(clearCart())
    setTimeout(() => navigate('/'), 3000)
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="checkout-page">
        <h1>Оформлення замовлення</h1>
        <p>Кошик порожній.</p>
        <Link to="/catalog" className="btn btn-primary">Перейти до каталогу</Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="checkout-page checkout-success">
        <h1>Дякуємо за замовлення!</h1>
        <p>Ми зв'яжемося з вами за вказаним номером телефону.</p>
        <Link to="/" className="btn btn-primary">На головну</Link>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h1>Оформлення замовлення</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ім'я *</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Телефон *</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Адреса доставки *</label>
            <input name="address" value={form.address} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Підтвердити замовлення
          </button>
        </form>
        <div className="checkout-order">
          <h3>Ваше замовлення</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} × {item.quantity} — {formatPrice(item.price * item.quantity)}
              </li>
            ))}
          </ul>
          <p className="checkout-total">Разом: {formatPrice(total)}</p>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectIsAuthenticated } from '../features/auth'
import { selectOrders } from '../features/orders'
import { AuthForm, logout } from '../features/auth'
import { OrderItem } from '../features/orders'
import Button from '../components/Button'
import Modal from '../components/Modal'
import '../shared/styles/ProfilePage.css'

export default function ProfilePage() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const orders = useSelector(selectOrders)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="profile-page">
        <h1>Профіль</h1>
        <p>Увійдіть або зареєструйтесь, щоб переглядати профіль та замовлення.</p>
        <Button variant="primary" onClick={() => setAuthModalOpen(true)}>
          Увійти
        </Button>
        <Modal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          title="Вхід / Реєстрація"
        >
          <AuthForm onSuccess={() => setAuthModalOpen(false)} />
        </Modal>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <h1>Профіль</h1>
      <div className="profile-info">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Ім'я:</strong> {user?.name}</p>
        <Button variant="secondary" onClick={() => dispatch(logout())}>
          Вийти
        </Button>
      </div>
      <section className="profile-orders">
        <h2>Мої замовлення</h2>
        {orders.length === 0 ? (
          <p className="profile-orders-empty">У вас ще немає замовлень.</p>
        ) : (
          orders.map((order) => <OrderItem key={order.id} order={order} />)
        )}
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart'
import '../shared/styles/Header.css'

export default function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="header">
      <Link to="/" className="logo">
        TechShop
      </Link>
      <nav className="nav">
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/profile">Профіль</Link>
        <Link to="/cart" className="cart-link">
          Кошик
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  )
}

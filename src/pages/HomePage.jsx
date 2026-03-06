import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products'
import ProductCard from '../features/products/components/ProductCard'
import '../shared/styles/HomePage.css'

export default function HomePage() {
  const products = useSelector(selectAllProducts)
  const featured = products.slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <h1>Ласкаво просимо в TechShop</h1>
        <p>Електроніка та гаджети за найкращими цінами. Курсовий проєкт на React та Redux Toolkit.</p>
        <Link to="/catalog" className="btn btn-primary">
          Перейти до каталогу
        </Link>
      </section>
      <section className="featured">
        <h2>Популярні товари</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/catalog" className="btn btn-secondary">
          Всі товари
        </Link>
      </section>
    </div>
  )
}

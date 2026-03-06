import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../cart/model/cartSlice'
import { formatProductPrice } from '../lib/helpers'
import ProductImage from '../../../shared/ui/ProductImage'
import '../../../shared/styles/ProductCard.css'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
  }

  return (
    <article className="product-card">
      <Link to={`/catalog/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <ProductImage
            image={product.image}
            productId={product.id}
            title={product.title}
            className="product-card-img"
          />
        </div>
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-meta">
          <span className="product-card-price">{formatProductPrice(product.price)}</span>
          <span className="product-card-rating">★ {product.rating}</span>
        </div>
        <button type="button" className="btn btn-primary product-card-btn" onClick={handleAdd}>
          В кошик
        </button>
      </Link>
    </article>
  )
}

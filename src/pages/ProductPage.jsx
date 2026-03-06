import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectProductById } from '../features/products'
import { ProductList, CatalogFilters } from '../features/products'
import { addToCart } from '../features/cart'
import { formatProductPrice } from '../features/products/lib/helpers'
import ProductImage from '../shared/ui/ProductImage'
import '../shared/styles/ProductPage.css'

function ProductDetail({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
    navigate('/cart')
  }

  return (
    <div className="product-page">
      <Link to="/catalog" className="back-link">← До каталогу</Link>
      <div className="product-detail">
        <div className="product-detail-image">
          <ProductImage
            image={product.image}
            productId={product.id}
            title={product.title}
            className="product-detail-img"
          />
        </div>
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p className="product-detail-price">{formatProductPrice(product.price)}</p>
          <p className="product-detail-rating">Рейтинг: ★ {product.rating}</p>
          <p className="product-detail-desc">
            Якісний товар з категорії «{product.category}». Додайте до кошика для оформлення замовлення.
          </p>
          <button type="button" className="btn btn-primary btn-lg" onClick={handleAddToCart}>
            Додати в кошик
          </button>
        </div>
      </div>
    </div>
  )
}

function CatalogView() {
  return (
    <div className="catalog-page">
      <h1>Каталог товарів</h1>
      <div className="catalog-layout">
        <CatalogFilters />
        <div className="catalog-content">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = useSelector((state) => selectProductById(state, id))

  if (id) {
    if (!product) {
      return (
        <div className="product-page">
          <p>Товар не знайдено.</p>
          <Link to="/catalog">Повернутися до каталогу</Link>
        </div>
      )
    }
    return <ProductDetail product={product} />
  }

  return <CatalogView />
}

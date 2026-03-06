import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts, selectProductsFilters } from '../model/productsSlice'
import { filterAndSortProducts } from '../lib/helpers'
import ProductCard from './ProductCard'
import '../../../shared/styles/ProductList.css'

export default function ProductList({ products: productsProp }) {
  const storeProducts = useSelector(selectAllProducts)
  const filters = useSelector(selectProductsFilters)
  const products = productsProp ?? storeProducts

  const filteredAndSorted = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters.category, filters.sortBy, filters.search]
  )

  if (filteredAndSorted.length === 0) {
    return <p className="product-list-empty">За вашими фільтрами товарів не знайдено.</p>
  }

  return (
    <div className="product-grid">
      {filteredAndSorted.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

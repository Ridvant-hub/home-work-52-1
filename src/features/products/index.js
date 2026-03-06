export { default as ProductList } from './components/ProductList'
export { default as ProductCard } from './components/ProductCard'
export { default as CatalogFilters } from './components/CatalogFilters'
export {
  selectAllProducts,
  selectProductById,
  selectProductsFilters,
  setProducts,
  setCategory,
  setSortBy,
  setSearch,
} from './model/productsSlice'
export { filterAndSortProducts, formatProductPrice } from './lib/helpers'

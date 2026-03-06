import { useDispatch, useSelector } from 'react-redux'
import { selectProductsFilters, setCategory, setSortBy, setSearch } from '../model/productsSlice'
import { CATEGORY_LABELS } from '../../../utils/constants'
import '../../../shared/styles/CatalogFilters.css'

export default function CatalogFilters() {
  const dispatch = useDispatch()
  const { category, sortBy, search, categories } = useSelector(selectProductsFilters)

  return (
    <aside className="catalog-filters">
      <div className="filter-group">
        <label>Пошук</label>
        <input
          type="search"
          placeholder="Назва товару..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
      <div className="filter-group">
        <label>Категорія</label>
        <select
          value={category ?? ''}
          onChange={(e) => dispatch(setCategory(e.target.value || null))}
        >
          <option value="">Усі</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {CATEGORY_LABELS[cat] ?? cat}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Сортування</label>
        <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
          <option value="default">За замовчуванням</option>
          <option value="price_asc">Ціна: спочатку дешевші</option>
          <option value="price_desc">Ціна: спочатку дорожчі</option>
          <option value="rating">За рейтингом</option>
        </select>
      </div>
    </aside>
  )
}

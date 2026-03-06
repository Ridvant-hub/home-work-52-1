/**
 * Фільтрація та сортування списку продуктів
 */
export const filterAndSortProducts = (products, { category, search, sortBy }) => {
  let list = [...products]
  if (category) {
    list = list.filter((p) => p.category === category)
  }
  if (search?.trim()) {
    const q = search.trim().toLowerCase()
    list = list.filter((p) => p.title.toLowerCase().includes(q))
  }
  if (sortBy === 'price_asc') list.sort((a, b) => a.price - b.price)
  if (sortBy === 'price_desc') list.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)
  return list
}

export const formatProductPrice = (price) => `${Number(price).toLocaleString('uk-UA')} ₴`

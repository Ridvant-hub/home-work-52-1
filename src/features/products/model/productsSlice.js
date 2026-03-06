import { createSlice } from '@reduxjs/toolkit'

const CATEGORIES = ['phones', 'laptops', 'audio', 'tablets', 'wearables', 'accessories', 'monitors']

const initialState = {
  items: [
    {
      id: 1,
      title: 'Смартфон Galaxy Pro',
      price: 15999,
      category: 'phones',
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Ноутбук UltraBook',
      price: 32999,
      category: 'laptops',
      image:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Навушники SoundMax',
      price: 2499,
      category: 'audio',
      image:
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Планшет Tab 10',
      price: 8999,
      category: 'tablets',
      image:
        'https://images.pexels.com/photos/5081395/pexels-photo-5081395.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Смарт-годинник Fit',
      price: 3499,
      category: 'wearables',
      image:
        'https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
    },
    {
      id: 6,
      title: 'Клавіатура Mech Pro',
      price: 1899,
      category: 'accessories',
      image:
        'https://images.pexels.com/photos/845262/pexels-photo-845262.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
    },
    {
      id: 7,
      title: 'Монітор 27" 4K',
      price: 12999,
      category: 'monitors',
      image:
        'https://images.pexels.com/photos/5720563/pexels-photo-5720563.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
    },
    {
      id: 8,
      title: 'iPhone 15',
      price: 42999,
      category: 'phones',
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
    },
    {
      id: 9,
      title: 'Колонка Bluetooth',
      price: 1599,
      category: 'audio',
      image:
        'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
    },
    {
      id: 10,
      title: 'Мишка Gaming',
      price: 899,
      category: 'accessories',
      image:
        'https://images.pexels.com/photos/845255/pexels-photo-845255.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
    },
  ],
  filters: {
    category: null,
    sortBy: 'default',
    search: '',
    categories: CATEGORIES,
  },
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload
    },
  },
})

export const { setProducts, setCategory, setSortBy, setSearch } = productsSlice.actions
export const selectAllProducts = (state) => state.products.items
export const selectProductById = (state, id) =>
  state.products.items.find((p) => p.id === Number(id))
export const selectProductsFilters = (state) => state.products.filters
export default productsSlice.reducer

import { formatPrice } from '../../../utils/helpers'

export const getOrderTotal = (items) =>
  items.reduce((sum, i) => sum + (i.price || 0) * (i.quantity || 0), 0)
export const formatOrderPrice = formatPrice

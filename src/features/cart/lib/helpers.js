import { formatPrice } from '../../../utils/helpers'

export const getCartItemSubtotal = (item) => item.price * item.quantity
export const formatCartPrice = formatPrice

/**
 * Повертає URL зображення для товару.
 * Якщо image — вже URL (http/https або /), повертає його; інакше — placeholder.
 */
export const getProductImageUrl = (image, productId = 1) => {
  if (typeof image === 'string' && (image.startsWith('http') || image.startsWith('/'))) {
    return image
  }
  return '/images/placeholder.svg'
}

/**
 * Чи є значення URL зображення (для рендеру <img> замість тексту/емодзі)
 */
export const isImageUrl = (value) =>
  typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))

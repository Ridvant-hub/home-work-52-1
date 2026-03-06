/**
 * Форматування ціни в гривні
 */
export const formatPrice = (value) => `${Number(value).toLocaleString('uk-UA')} ₴`

/**
 * Обмеження числа в діапазоні
 */
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

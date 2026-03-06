import { getProductImageUrl, isImageUrl } from '../../utils/imageHelpers'

/**
 * Відображає зображення товару: <img> для URL або fallback (емодзі/текст).
 */
export default function ProductImage({ image, productId, title, className = '' }) {
  const url = getProductImageUrl(image, productId)
  const useImg = isImageUrl(url)

  if (useImg) {
    return (
      <img
        src={url}
        alt={title || 'Товар'}
        className={className}
        loading="lazy"
      />
    )
  }
  return <span className={className}>{image}</span>
}

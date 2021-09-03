import { useParams } from 'react-router-dom'
import { ProductDetailsItem } from './ProductDetailsItem'

export function ProductDetails({ productDetailsData }) {
  let { itemId } = useParams()
  const selectBook = productDetailsData?.find((book) => book.id === itemId)

  return <ProductDetailsItem productDetailsData={selectBook} />
}

import { useParams } from 'react-router-dom'
import ProductDetailsItem from './ProductDetailsItem'

const ProductDetails = ({ products }) => {
  const { itemId } = useParams()
  const selectBook = products?.find((book) => book.id === itemId)

  return <ProductDetailsItem product={selectBook} />
}

export default ProductDetails

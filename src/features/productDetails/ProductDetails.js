import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductDetailsItem from './ProductDetailsItem'

const ProductDetails = (props) => {
  const { products } = props
  const { itemId } = useParams()
  const selectBook = products?.find((book) => book.id === itemId)

  return <ProductDetailsItem products={selectBook} />
}
ProductDetails.propTypes = {
  products: PropTypes.array
}
export default ProductDetails

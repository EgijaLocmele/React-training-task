import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductListItem from './ProductListItem'
import './ProductList.scss'

const ProductList = (props) => {
  const { products } = props
  return (
    <div className="product-list">
      {products.map((item) => (
        <Link
          to={`/products/${item.id}`}
          key={item.id}
          className="product-list__link"
        >
          <ProductListItem key={item.id} item={item} />
        </Link>
      ))}
    </div>
  )
}
ProductList.propTypes = {
  product: PropTypes.array
}
export default ProductList

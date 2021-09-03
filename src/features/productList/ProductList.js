import React from 'react'
import { Link } from 'react-router-dom'
import { ProductListItem } from './ProductListItem'
import './ProductList.scss'

export function ProductList({ productListData }) {
  return (
    <div className="product-list">
      {productListData.map((item) => (
        <Link
          to={`/products/${item.id}`}
          key={item.id}
          className="product-list__link"
        >
          <ProductListItem
            key={item.id}
            path={item.path}
            imageAlt={item.imageAlt}
            title={item.title}
            price={item.price}
          />
        </Link>
      ))}
    </div>
  )
}

import React from 'react'
import { ProductListItem } from './ProductListItem'
import './ProductList.scss'

export function ProductList({ productListData }) {
  return (
    <div className="product-list">
      {productListData.map((item, key) => (
        <ProductListItem
          key={key}
          path={item.path}
          imageAlt={item.imageAlt}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  )
}

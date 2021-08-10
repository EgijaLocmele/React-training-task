import React from 'react'
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardImage
} from '@fluentui/react/lib/DocumentCard'
import { Text } from '@fluentui/react/lib/Text'
import { ImageFit } from '@fluentui/react/lib/Image'
import ProductList from '../../data/ProductListData'
import './ProductList.scss'

export function ProductListItem () {
  return (
    <div className="product-list">
      {ProductList.map((item, i) => (
      <DocumentCard className="product-list-items" key={i}>
        <DocumentCardImage imageFit={ImageFit.cover} imageSrc={item.path} className="product-list__image" alt={item.imageAlt}/>
        <div className="product-list__text" >
          <DocumentCardTitle
            title={item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
            shouldTruncate className="product-list__title" />
          <Text className="product-list__price">{item.price}</Text>
        </div>
      </DocumentCard>
      ))}
    </div>
  )
}

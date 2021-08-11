import React from 'react'
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardImage
} from '@fluentui/react/lib/DocumentCard'
import { Text } from '@fluentui/react/lib/Text'
import { ImageFit } from '@fluentui/react/lib/Image'

export function ProductListItem ({ path, imageAlt, title, price }) {
  function truncateText() {
    if (title.length > 50) {
      return `${title.substring(0, 50)}...`;
    }
    return title;
  }
  return (
      <DocumentCard className="product-list-items" >
        <DocumentCardImage imageFit={ImageFit.cover} imageSrc={require(`../../assets/${path}`).default} className="product-list__image" alt={imageAlt}/>
        <div className="product-list__text" >
          <DocumentCardTitle title={truncateText()} shouldTruncate className="product-list__title" />
          <Text className="product-list__price">{price}</Text>
        </div>
      </DocumentCard>
  )
}
import React from 'react'
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardImage
} from '@fluentui/react/lib/DocumentCard'
import { Text } from '@fluentui/react/lib/Text'
import { ImageFit } from '@fluentui/react/lib/Image'
import PropTypes from 'prop-types'

const ProductListItem = (props) => {
  const { item } = props
  function truncateText() {
    if (item.title.length > 50) {
      return `${item.title.substring(0, 50)}...`
    }
    return item.title
  }
  return (
    <DocumentCard className="product-list-items">
      <DocumentCardImage
        imageFit={ImageFit.cover}
        imageSrc={require(`../../assets/${item.path}`).default}
        className="product-list__image"
        alt={item.imageAlt}
      />
      <div className="product-list__text">
        <DocumentCardTitle
          title={truncateText()}
          shouldTruncate
          className="product-list__title"
        />
        <Text className="product-list__price">{item.price}</Text>
      </div>
    </DocumentCard>
  )
}
ProductListItem.propTypes = {
  product: PropTypes.object
}

export default ProductListItem

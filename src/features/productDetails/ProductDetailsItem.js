import { Text } from '@fluentui/react/lib/Text'
import { Image, ImageFit } from '@fluentui/react/lib/Image'
import { SpinButton, Position } from '@fluentui/react'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import PropTypes from 'prop-types'
import './ProductDetails.scss'

const ProductDetailsItem = (props) => {
  const { product } = props
  return (
    <div className="product-details">
      <Text className="product-details__title" variant="large">
        {product.title}
      </Text>
      <Image
        imageFit={ImageFit.cover}
        className="product-details__image"
        src={require(`../../assets/${product.path}`).default}
        alt={product.imageAlt}
      />
      <Text className="product-details__description" block>
        {product.description}
      </Text>
      <div className="product-details__container">
        <SpinButton
          className="product-details__container__amount"
          label="Amount:"
          labelPosition={Position.top}
          defaultValue="1"
          min={1}
          max={10}
          step={1}
          incrementButtonAriaLabel="Increase value by 1"
          decrementButtonAriaLabel="Decrease value by 1"
        />
        <Text className="product-details__container__price" variant="large">
          {product.price}
        </Text>
      </div>
      <PrimaryButton className="product-details__button" text="Add to cart" />
    </div>
  )
}
ProductDetailsItem.propTypes = {
  product: PropTypes.object
}

export default ProductDetailsItem

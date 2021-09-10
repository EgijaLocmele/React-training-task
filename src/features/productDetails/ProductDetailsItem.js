import { Text } from '@fluentui/react/lib/Text'
import { Image, ImageFit } from '@fluentui/react/lib/Image'
import { SpinButton, Position } from '@fluentui/react'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import PropTypes from 'prop-types'
import './ProductDetails.scss'

const ProductDetailsItem = (props) => {
  const { products } = props
  return (
    <div className="product-details">
      <Text className="product-details__title" variant="large">
        {products.title}
      </Text>
      <Image
        imageFit={ImageFit.cover}
        className="product-details__image"
        src={require(`../../assets/${products.path}`).default}
        alt={products.imageAlt}
      />
      <Text className="product-details__description" block>
        {products.description}
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
          {products.price}
        </Text>
      </div>
      <PrimaryButton className="product-details__button" text="Add to cart" />
    </div>
  )
}
ProductDetailsItem.propTypes = {
  products: PropTypes.object
}

export default ProductDetailsItem

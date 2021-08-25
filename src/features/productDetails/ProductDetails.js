import { ProductDetailsItem } from './ProductDetailsItem'

export function ProductDetails({ productDetailsData }) {
  const { title, path, imageAlt, description, price } = productDetailsData
  return (
    <ProductDetailsItem
      title={title}
      path={path}
      imageAlt={imageAlt}
      description={description}
      price={price}
    />
  )
}

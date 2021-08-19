import { ProductDetailsItem } from './ProductDetailsItem'

export function ProductDetails({ productDetailsData }) {
  return (
    <ProductDetailsItem 
      title={productDetailsData.title}
      path={productDetailsData.path} 
      imageAlt={productDetailsData.imageAlt} 
      description={productDetailsData.description}
      price={productDetailsData.price}
    />
  )
}
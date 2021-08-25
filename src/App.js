import React from 'react'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { HeaderNavigation } from './features/header/HeaderNavigation'
import { ProductList } from './features/productList/ProductList'
import { ProductDetails } from './features/productDetails/ProductDetails'
import data from './data/data.json'

initializeIcons()

function App() {
  return (
    <>
      <h1>hi</h1>
      <HeaderNavigation />
      <ProductList productListData={data.productListItems} />
      <ProductDetails productDetailsData={data.productListItems} />
    </>
  )
}

export default App

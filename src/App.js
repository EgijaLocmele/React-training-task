import React from 'react'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { HeaderNavigation } from './features/header/HeaderNavigation'
import { ProductList } from './features/productList/ProductList'
import data from './data/data.json'

initializeIcons()

function App () {
  return (
    <>
      <HeaderNavigation/>
      <ProductList productListData={data.productListItems}/>
    </>
  )
}

export default App

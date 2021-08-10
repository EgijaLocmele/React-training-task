import React from 'react'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { HeaderNavigation } from './features/header/HeaderNavigation'
import { ProductListItem } from './features/productList/ProductListItem'

initializeIcons()

function App () {
  return (
    <div>
      <HeaderNavigation/>
      <ProductListItem />
    </div>
  )
}

export default App

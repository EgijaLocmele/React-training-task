import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { HeaderNavigation } from './features/header/HeaderNavigation'
import { ProductList } from './features/productList/ProductList'
import { ProductDetails } from './features/productDetails/ProductDetails'
import data from './data/data.json'

initializeIcons()

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Switch>
        <Route exact path="/">
          <ProductList productListData={data.productListItems} />
        </Route>
        <Route path="/products/:itemId">
          <ProductDetails productDetailsData={data.productListItems} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

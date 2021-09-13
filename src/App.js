import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { useSelector } from 'react-redux'
import { HeaderNavigation } from './features/Header/HeaderNavigation'
import ProductList from './features/ProductList/ProductList'
import ProductDetails from './features/ProductDetails/ProductDetails'

initializeIcons()

function App() {
  const products = useSelector((state) => state.productListItems)

  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>
        <Route path="/products/:itemId">
          <ProductDetails products={products} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { HeaderNavigation } from './features/header/HeaderNavigation';
import { ProductList } from './features/productList/ProductList';

initializeIcons();

function App() {
  return (
    <div>
      <HeaderNavigation/>
      <ProductList />
    </div>
  );
}

export default App;

import React from 'react';
import { HeaderNavigation } from './features/header/HeaderNavigation';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

function App() {
  return (
    <HeaderNavigation/>
  );
}

export default App;

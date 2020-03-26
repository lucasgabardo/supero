import React from 'react';
import { AppContextProvider } from './AppContext';
import Header from './components/Header/Header.js';
import Filter from './components/Filter';
import List from './components/List/List'

function App() {
  return (
    <AppContextProvider>      
      <Header />
      <Filter />
      <List />
    </AppContextProvider>    
  );
}

export default App;

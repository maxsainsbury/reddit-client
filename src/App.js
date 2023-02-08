import React from 'react';
import logo from './logo.svg';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainer />
      
    </div>
  );

}

export default App;

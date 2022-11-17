import React, { useState } from 'react';
import "./css/app.css";
import { Search, output } from './components/Search';
import { Title } from './components/Title';

const App = function() {
  return (
    <div className="App">
      <Title></Title>
      <Search></Search>
    </div>
  );
}

export default App;

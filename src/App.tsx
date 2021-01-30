import React, { useCallback, useState } from 'react';

import './App.scss';
import AppFooterLeft from './components/AppFooterLeft/AppFooterLeft';
import AppLeft from './components/AppLeft/AppLeft';

function App() {
  return (
    <div className="App">
      <AppLeft />
      <div className="App__middle">

      </div>
      <div className="App__right">

      </div>
      <AppFooterLeft />
      <div className="App__footer-right">

      </div>
    </div>
  );
}

export default App;

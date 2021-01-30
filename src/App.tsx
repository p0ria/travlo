import React, { useCallback, useState } from 'react';

import './App.scss';
import { tripImages } from './common/constants';
import AppFooterLeft from './components/AppFooterLeft/AppFooterLeft';
import AppLeft from './components/AppLeft/AppLeft';
import Trip from './components/Trip/Trip';

function App() {
  return (
    <div className="App">
      <AppLeft />
      <div className="App__middle">
        <Trip imageUrl={tripImages[0]} title="San Francisco" subTitle="Calpe Alicante" />
      </div>
      <div className="App__right">
        <Trip imageUrl={tripImages[1]} title="National Park" subTitle="Grand Canyon" />
        <Trip imageUrl={tripImages[2]} title="National Park" subTitle="Grand Canyon" />
      </div>
      <AppFooterLeft />
      <div className="App__footer-right">

      </div>
    </div>
  );
}

export default App;

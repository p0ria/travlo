import React, { useCallback, useState } from 'react';

import logo from './logo.svg';
import './App.scss';
import VertCounter from './components/VertCounter/VertCounter';

function App() {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const sliderOnTimerElapsed = useCallback(() => {
    setCurrentSliderIndex(index => (index + 1) % 5);
  }, []);

  return (
    <div className="App">
      <div className="App__left">
        <VertCounter
          total={5}
          current={currentSliderIndex + 1}
          timerElapsed={sliderOnTimerElapsed} />
      </div>
      <div className="App__middle">

      </div>
      <div className="App__right">

      </div>
      <div className="App__footer-left">

      </div>
      <div className="App__footer-right">

      </div>
    </div>
  );
}

export default App;

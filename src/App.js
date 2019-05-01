import React from 'react';
import ReactIconCarousel from 'react-icon-carousel';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App" style={{minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <ReactIconCarousel>
      </ReactIconCarousel>
    </div>
  );
}

export default App;

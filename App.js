import React from 'react';
import DropdownProvider from './components/DropdownProvider';
import DropdownSelector from './components/DropdownSelector';
import './App.css';


const App = () => {
  return (
    <DropdownProvider>
      <div>
        <h1 id='main'>Thermofisher</h1>
        <DropdownSelector />
      </div>
    </DropdownProvider>
  );
};

export default App;

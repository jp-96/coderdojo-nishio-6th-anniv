import React from 'react';
import { OctaEchoPhoneContextProvider } from '../../src';
import OctaEchoPhoneDevice from './components/OctaEchoPhoneDevice';
import Logo from './Logo';  // logo.svg ==> Logo.tsx
//import './App.css'; // ==> ../index.html

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/jp-96/coderdojo-nishio-6th-anniv/blob/main/pages/app/components/OctaEchoPhoneDevice.tsx#L182"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <p>
          <OctaEchoPhoneContextProvider connectionName='Octa Echo Phone' bluetooth={window.navigator.bluetooth}>
            <OctaEchoPhoneDevice />
          </OctaEchoPhoneContextProvider>
        </p>
      </header>
    </div>
  );
}

export default App;

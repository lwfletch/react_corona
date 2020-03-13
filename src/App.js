import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Stats from './components/Stats';
import CountrySelector from './components/CountrySelector';
import './App.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #114b5f;
    color: #e4fde1;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h2>Worldwide</h2>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}

export default App;

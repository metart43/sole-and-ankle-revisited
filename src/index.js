import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import { THEME } from "./constants"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

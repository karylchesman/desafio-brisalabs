import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import lightTheme from './styles/themes/light';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { AppContext, ContextProvider } from './context/ContextProvider';

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes />
        <GlobalStyle />
      </ContextProvider>
    </Router>
  );
}

export default App;

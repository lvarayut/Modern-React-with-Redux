import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

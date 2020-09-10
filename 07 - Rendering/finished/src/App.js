import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

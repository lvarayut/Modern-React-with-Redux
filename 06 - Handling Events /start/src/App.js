import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;

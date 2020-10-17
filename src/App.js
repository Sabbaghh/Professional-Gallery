import React from 'react';
import Layout from './Layout'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;

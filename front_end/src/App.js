import React from 'react';

import Home from './pages/Home';
// import AppliedRoute from './pages/AppliedRoute';

// import { Switch, Route } from 'react-router-dom';
//Link

const App = () => {
  const bg = {
    background: '#FDEAC3',
  };

  return (
    <div className="App" style={bg}>

      {/* move logo title here  */}
    
      <Home />
    </div>
  );
};

export default App;

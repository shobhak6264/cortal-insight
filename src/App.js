import React from 'react';
import { GraphProvider } from './context/GraphContext';
import Dashboard from './components/dashboard';


const App = () => {
  return (
    <GraphProvider>
      <div>
        <Dashboard/>
      </div>
    </GraphProvider>
  );
};

export default App;

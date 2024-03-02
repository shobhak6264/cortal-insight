import React, { createContext, useContext, useState } from 'react';

const GraphContext = createContext();

export const useGraphContext = () => {
  const context = useContext(GraphContext);
  if (!context) {
    throw new Error('useGraphContext must be used within a GraphProvider');
  }
  return context;
};

export const GraphProvider = ({ children }) => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <GraphContext.Provider value={{ activeNode, setActiveNode }}>
      {children}
    </GraphContext.Provider>
  );
};

import { createContext, useContext, useState } from 'react';

const DataTableContext = createContext();

export const DataTableProvider = ({ children }) => {
  const [editableCell, setEditableCell] = useState(null);

  return (
    <DataTableContext.Provider value={[editableCell, setEditableCell]}>
      {children}
    </DataTableContext.Provider>
  );
};

export const useDataTable = () => {
  const context = useContext(DataTableContext);

  if (!context) {
    throw new Error('useDataTable must be used inside DataTableProvider');
  }

  return context;
};

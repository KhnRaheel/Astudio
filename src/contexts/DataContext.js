import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    limit: 5,
    search: '',
  });
  const [pagination, setPagination] = useState({
    page: 0,
    total: 0,
  });

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        filters,
        setFilters,
        pagination,
        setPagination,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
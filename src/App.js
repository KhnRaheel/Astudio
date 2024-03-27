import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Products from './pages/Products';
import { DataProvider } from './contexts/DataContext';

// Rest of the code remains the same

const App = () => {
  return (
    <Router>
      <DataProvider>
        <div>
          <Routes>
            <Route index element ={<Users />}/>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
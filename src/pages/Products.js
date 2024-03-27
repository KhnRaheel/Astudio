import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../contexts/DataContext';
import DataTable from '../components/DataTableProduct';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import Tabs from '../components/Tabs';

const Products = () => {
  const { data, setData, filters, pagination, setFilters } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState('ALL');
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          params: {
            ...filters,
            ...pagination,
          },
        });
        setProductsData(response.data.products);
        setData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters, pagination]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'Laptops') {
      setFilters({ ...filters, category: 'laptops' });
    } else {
      setFilters({ ...filters, category: undefined });
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <Tabs
        tabs={['ALL', 'Laptops']}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <Filters endpoint="products" data={productsData} setData={setProductsData} />
      <DataTable data={productsData} />
      <Pagination endpoint="products" />
    </div>
  );
};

export default Products;
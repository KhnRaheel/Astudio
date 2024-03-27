import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import axios from 'axios';

const Filters = ({ endpoint, data, setData }) => {
  const { filters, setFilters, setPagination } = useContext(DataContext);

  const handlePageSizeChange = (e) => {
    setFilters({ ...filters, limit: parseInt(e.target.value) });
    setPagination({ page: 0, total: 0 });
    fetchData(endpoint, { ...filters, limit: parseInt(e.target.value) });
  };

  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
    filterDataClient(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value, search: '' });
    setPagination({ page: 0, total: 0 });
    fetchData(endpoint, { ...filters, [name]: value });
  };

  const filterDataClient = (searchValue) => {
    const filteredData = data?.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    ) || [];
    setData(filteredData);
  };

  const fetchData = async (endpoint, params) => {
    try {
      const response = await axios.get(`https://dummyjson.com/${endpoint}`, {
        params,
      });
      setData(response.data[`${endpoint}`]);
      setPagination((prevPagination) => ({
        ...prevPagination,
        total: response.data.total,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <select value={filters.limit} onChange={handlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <div>
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Search"
          value={filters.search}
          onChange={handleSearch}
        />
      </div>
      {/* Add more filter inputs for other fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name || ''}
        onChange={handleFilterChange}
      />
      {/* Add more filter inputs for other fields */}
    </div>
  );
};

export default Filters;
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../contexts/DataContext';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// Rest of the code remains the same

const Users = () => {
  const { data, setData, filters, pagination } = useContext(DataContext);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users', {
          params: {
            ...filters,
            ...pagination,
          },
        });
        setUsersData(response.data.users);
        setData(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters, pagination]);

  return (
    <div>
      <h1><Link to="/users">Users</Link>  <Link to="/products">Products</Link></h1>
      <Filters endpoint="users" data={usersData} setData={setUsersData} />
      <DataTable data={usersData} />
      <Pagination endpoint="users" />
      
    </div>
  );
};

export default Users;
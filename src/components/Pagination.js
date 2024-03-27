import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import axios from 'axios';

const Pagination = ({ endpoint }) => {
  const { pagination, setPagination, filters, setData } = useContext(DataContext);

  const handlePageChange = async (pageNumber) => {
    try {
      const response = await axios.get(`https://dummyjson.com/${endpoint}`, {
        params: {
          ...filters,
          page: pageNumber,
        },
      });
      setData(response.data[`${endpoint}`]);
      setPagination({ ...pagination, page: pageNumber - 1 }); // Set page as zero-based index
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderPaginationButtons = () => {
    const { total, limit, page } = pagination;
    const totalPages = Math.ceil(total / limit);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            backgroundColor: page === i - 1 ? '#c0e3e5' : '#ebebeb', // Use i - 1 to compare with zero-based index
            color: page === i - 1 ? '#322625' : '#000',
          }}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return <div>{renderPaginationButtons()}</div>;
};

export default Pagination;
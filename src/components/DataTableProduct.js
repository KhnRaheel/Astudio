import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const DataTable = ({ data }) => {
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'title', headerName: 'Title', width: 150 },
      { field: 'description', headerName: 'Description', width: 150 },
      { field: 'price', headerName: 'Price', width: 150 },
      { field: 'discountPercentage', headerName: 'DiscountPrice', type: 'number', width: 90 },
      { field: 'rating', headerName: 'Rating', width: 120 },
      { field: 'stock', headerName: 'Stock', width: 250 },
      { field: 'brand', headerName: 'Brand', width: 150 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'thumbnail', headerName: 'Thumbnail', width: 150 },
      { field: 'images', headerName: 'Images', width: 150 },
    ],
    [] // Empty dependency array to ensure columns are memoized only once
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default DataTable;

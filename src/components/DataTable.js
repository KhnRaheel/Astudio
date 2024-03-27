import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '@mui/material/styles';

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'maidenName', headerName: 'Middle Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'gender', headerName: 'Gender', width: 120 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  { field: 'eyeColor', headerName: 'Eye Color', width: 150 },
];

const DataTable = ({ data }) => {
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
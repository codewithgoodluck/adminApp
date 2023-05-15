import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const tableData = [
  {
    id: 1,
    name: '20000',
    age: 'goodluckmrdi@gmail.com',
    address: '20/07/2010',
    status:'submited',
    typeme: '20/07/2010',
    date:'submited'
  },
 
  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function PaymentHistoryTable() {
 
  return (
    <section className='mx-10'>
        <div className="text-lg font-bold mt-10 mb-2 ">Payment History</div>
        <hr></hr>
    <TableContainer   >
    
      <Table>
        <TableHead>
          <TableRow className='bg-[#E3F0FF]'>
          <TableCell style={{ fontWeight: 600 }}>#</TableCell>
            <TableCell style={{ fontWeight: 600 }}>User Id</TableCell>
            <TableCell style={{ fontWeight: 600 }}>User</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Amount</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Date</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.status}</TableCell>

              <TableCell>{row.date}</TableCell>
              {/* <TableCell>
                <button className='bg-red-900 text-xs    py-2 px-4 rounded-md text-white  mr-2' onClick={() => handleClick(row.id)}>Delete</button>
                <button  className='bg-yellow-900 text-xs mt-2 py-2 px-2 rounded-md text-white mr-2 ' onClick={() => handleClick(row.id)}>Disable</button>
                <button  className='bg-blue-900 text-xs mt-2 py-2 px-2 rounded-md text-white  ' onClick={() => handleClick(row.id)}>Freeze</button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}

export default PaymentHistoryTable;
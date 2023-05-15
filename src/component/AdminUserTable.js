import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const tableData = [
  {
    id: 1,
    name: 'Atm',
    age: 'goodluckmrdi@gmail.com',
    address: '20/07/2010',
    // status:'submited',
    // typeme: '20/07/2010',
    date:'submited'
  },
 
  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function AdminUserTable() {
  return (
    <section className='mx-10'>
        <div className="text-lg font-bold mt-10 mb-2 ">Admin User Information</div>
        <hr></hr>
    <TableContainer   >
    
      <Table>
        <TableHead className='bg-[#E3F0FF]'>
          <TableRow>
            <TableCell style={{ fontWeight: 600 }}>User</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Password</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Type</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Date Created</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.address}</TableCell>
              
              
              <TableCell>
                <button className='bg-yellow-900 text-xs    py-2 px-4 rounded-md text-white  mr-2' onClick={() => handleClick(row.id)}>Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}

export default AdminUserTable;
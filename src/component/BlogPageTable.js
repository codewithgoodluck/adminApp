import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: 'Atm',
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

function BlogPageTable() {
  const [userRole, setUserRole] = useState();
  const [validateRole, setValidateRole] = useState();
  function checkRoleValidation(userRole) {
    console.log(userRole)
    if (userRole === "auditor") {
      setValidateRole(userRole);
     
    } 
    
  }

  useEffect(() => {
    const role = authService.getUserRole();
    // console.log(role)
    checkRoleValidation(role);
    setUserRole(role);
    
  }, []);
  return (
    <section className='mx-10'>
        <div className="text-lg font-bold mt-10 mb-2 ">Post Page</div>
        <hr></hr>
    <TableContainer   >
      <Table>
        <TableHead className='bg-[#E3F0FF]'>
          <TableRow>
           
            <TableCell style={{ fontWeight: 600 }}>Title</TableCell>
            <TableCell style={{ fontWeight: 600 }}>Description</TableCell>
            <TableCell style={{ fontWeight: 600 }}> Author</TableCell>
         
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell>{row.id}</TableCell> */}
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              
              <TableCell>
               <div className='flex'>

          {validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         Delete
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        Delete
                      </button>
                    )}
                           {validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-blue-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         View More
                      </button>
                    ) : (
                      <Link to={"/viewimage"}>
                      <button
                        className="mr-2 mt-2 rounded-md bg-blue-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        View More
                      </button>
                      </Link>
                    )}

{validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         Edit
                      </button>
                    ) : (
                      <Link to={"/viewimage"}>
                      <button
                        className="mr-2 mt-2 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        Edt
                      </button>
                      </Link>
                    )}

              
                
               
              
               
          
               </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}

export default BlogPageTable;
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: 'Atm',
    age: 'goodluckmrdi@gmail.com',
    status:'submited',
    date:'submited'
  },
 
  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function RentPageTable() {
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
    <section className='mx-10 ' >
        <div className="text-lg font-bold mt-10  mb-3 ">Rent</div>
      
        <div className="relative my-2 mr-auto  max-w-xs lg:block">
                  <p className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0
                        11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </p>
                  <input
                    placeholder="Type to search country"
                    type="search"
                    className="w-full rounded-lg border
                border-gray-300 px-3 py-2 pb-2 pl-10 pt-2 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
    <TableContainer   >
    
      <Table>
        <TableHead className='bg-[#E3F0FF] '>
          <TableRow>
            <TableCell style={{width: '10%'}}  style={{ fontWeight: 600 }}>#</TableCell>
            <TableCell style={{width: '10%'}} style={{ fontWeight: 600 }} >Rented Number</TableCell>
            <TableCell style={{width: '10%'}} style={{ fontWeight: 600 }} >User</TableCell>
            <TableCell style={{width: '10%'}} style={{ fontWeight: 600 }} >Country</TableCell>
            
            <TableCell style={{width: '50%'}}  style={{ fontWeight: 600 }}>Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow  key={row.id}>
              <TableCell  style={{width: '20%'}}>{row.id}</TableCell>
              <TableCell style={{width: '20%'}}>{row.name}</TableCell>
              <TableCell style={{width: '10%'}}>{row.age}</TableCell>
              <TableCell style={{width: '10%'}}>{row.age}</TableCell>
           
              
              <TableCell style={{width: '50%'}}>
             
                <div className='flex '>
                {validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         Enable
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        Enable
                      </button>
                    )}

{validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-yellow-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         Disable
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-yellow-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        Disable
                      </button>
                    )}

{validateRole ? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                         View More
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        View More
                      </button>
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

export default RentPageTable;
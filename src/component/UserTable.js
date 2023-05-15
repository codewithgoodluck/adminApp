import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: "20000",
    age: "goodluckmrdi@gmail.com",
    address: "20/07/2010",
    status: "submited",
  },

  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function UserTable() {
  const navigate = useNavigate();
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
    <section className="mx-10">
      <div className="mb-2 mt-10 text-lg font-bold  ">User Details</div>
      <hr></hr>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#E3F0FF]">
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>User Id</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Serial number</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Registration date
              </TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Verification Status
              </TableCell>
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
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <div className="flex">
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
                         Delete
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-blue-900 px-2 py-2 text-xs text-white "
                        onClick={() => handleClick(row.id)}
                      >
                        Delete
                      </button>
                    )}
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

export default UserTable;

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const tableData = [
  {
    id: 1,
    name: "English",
  },

  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function LandingPageTable() {
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
      <div className="mb-2 mt-10 text-lg font-bold  ">Language Page</div>
      <hr></hr>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#E3F0FF]">
            <TableRow>
            <TableCell style={{ fontWeight: 600 }}>#</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Language</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>

                <TableCell>
                  <div className="flex">
                    
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

export default LandingPageTable;

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
import {  useNavigate } from "react-router-dom";

import { GrCurrency } from "react-icons/gr";

const tableData = [
  {
    id: 1,
    name: "Atm",
    age: "goodluckmrdi@gmail.com",
    address: "20/07/2010",
    status: "submited",
    typeme: "20/07/2010",
    date: "submited",
  },

  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function WaletPageTable() {
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
      <div className="mb-2 mt-10 text-lg font-bold ">Users’ Wallet Balance</div>
      <hr></hr>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#E3F0FF]">
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>#</TableCell>
              <TableCell style={{ fontWeight: 600 }}>User</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Balance</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Referrals Earn</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Ref Earn Status</TableCell>

              <TableCell style={{ fontWeight: 600 }}> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>

                <TableCell>

                <div className="flex cursor-not-allowed">
                    
                    <label
                      htmlFor="my-modal-3"
                      className=" "
                      // onClick={() => handleClick(row.id)}
                    >
                       {validateRole? ( <button className="bg-red-900 mr-2 mt-2 rounded-md   px-2 py-2 text-xs  text-white cursor-not-allowed opacity-50"> Set balance button</button>):(
                         <button className="bg-red-900 mr-2 mt-2 rounded-md   px-2 py-2 text-xs  text-white "> Set balance button</button>
                       )}
                    
                    </label>
                    <label
                      htmlFor="my-modal-4"
                  
                    >

{validateRole? ( <button className="bg-blue-900 mr-2 mt-2 rounded-md   px-2 py-2 text-xs  text-white cursor-not-allowed opacity-50">   Set Ref Balance Status</button>):(
                         <button className="bg-blue-900 mr-2 mt-2 rounded-md   px-2 py-2 text-xs  text-white ">   Set Ref Balance Status</button>
                       )}
                    
                    </label>
                  </div>

                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Put this part before </body> tag */}
      <div>
        {/* balance info */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal bg-[none] bg-transparent">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn-sm btn-circle btn absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="mt-10 grid  place-items-center ">
              <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
                <div className="card-body mt-6 px-8 ">
                  <form>
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="ml-3 text-xs font-bold text-gray-500"
                      >
                        Set Balance Amount
                      </label>
                      <div className="relative rounded-md">
                        <div className="inset-y-0 pl-3">
                          <GrCurrency className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Balance Amount"
                          id="emailAddress"
                          className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                        />
                      </div>
                    </div>

                    <div className="mb-4 mt-3 flex place-items-center justify-center px-8 md:grid">
                      <button class=" rounded-lg bg-[#1F45A3] px-5 py-2 font-bold text-white">
                        Set Amount
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* balance info */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal bg-transparent">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
              className="btn-sm btn-circle btn absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="mt-10 grid  place-items-center ">
              <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
                <div className="card-body mt-6 px-8 ">
                  <form>
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="ml-3 text-xs font-bold text-gray-500"
                      >
                        Set Ref Amount
                      </label>
                      <div className="relative rounded-md">
                        <div className="inset-y-0 pl-3">
                          <GrCurrency className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Ref Amount"
                          id="emailAddress"
                          className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                        />
                      </div>
                    </div>

                    <div className="mb-4 mt-3 flex place-items-center justify-center px-8 md:grid">
                      <button class=" rounded-lg bg-[#1F45A3] px-5 py-2 font-bold text-white">
                        Set Ref Amount
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaletPageTable;

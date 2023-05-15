import React, { useState } from "react";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";

import { GiCancel } from "react-icons/gi";
import DashboardPage from "./DashboardPage";
import UserPage from "./UserPage2";
import Sidebar from "../component/Sidebar";
import UserTable from "../component/UserTable";
import Navbar from "../component/Navbar";
import TransactionTable from "../component/TransactionTable";
import PaymentHistoryTable from "../component/PaymentHistoryTable";
import PaymentMethodTable from "../component/PaymentMethodTable";
import CountryTable from "../component/CountryTable";
import { authService } from "../services/authService";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Country() {
  const [userRole, setUserRole] = useState();
  const [validateRole, setValidateRole] = useState();
  function checkRoleValidation(userRole) {
    console.log(userRole);
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
  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(true);

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (
    <>
      <section className=" flex  overflow-hidden ">
        <div className="z-50 max-h-screen ">
          <Sidebar
            toggleSideBar={toggleSideBar}
            isSideBarVisible={isSideBarVisible}
          ></Sidebar>
        </div>

        <section className="z-0  w-full">
          <Navbar className="" toggleSideBar={toggleSideBar}></Navbar>
          <div className="mx-10 mt-5 flex w-full justify-start">
            {validateRole ? (
              <button className="mr-2 mt-2 cursor-not-allowed rounded-md bg-green-900 px-2 py-2 text-xs text-white opacity-50 ">
                Add Country
              </button>
            ) : (
              <Link to="/createcountry">
                <button className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white ">
                  Add Country
                </button>
              </Link>
            )}
          </div>
          <CountryTable></CountryTable>
        </section>
      </section>
    </>
  );
}

export default Country;

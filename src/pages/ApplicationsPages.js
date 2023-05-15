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
import CouponPageTable from "../component/CouponPageTable";
import { Link } from "react-router-dom";
import ApplicationsTablePage from "../component/ApplicationsTablePage";

function ApplicationsPages() {
  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(true);

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (
    <>

      <section className=" flex overflow-hidden   ">
        <div className="z-50 max-h-screen ">
          <Sidebar
            toggleSideBar={toggleSideBar}
            isSideBarVisible={isSideBarVisible}
          ></Sidebar>
        </div>

        <section className="z-0  w-full">
          <Navbar className="" toggleSideBar={toggleSideBar}></Navbar>
          <div className="w-full flex justify-start mt-5 mx-10">
         
          {/* <Link to={"/"}>
          <button  className='bg-green-900 text-xs mt-2 py-2 px-2 rounded-md text-white mr-2 ' >Add New Country</button>
          </Link> */}
          </div>
          <ApplicationsTablePage></ApplicationsTablePage>
          
        </section>
      </section>
    </>
  );
}

export default ApplicationsPages;

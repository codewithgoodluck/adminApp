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


function PaymentHistoryPage() {
  
  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(true);

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (
    <>

      <section className=" flex   ">
        <div className="z-50 max-h-screen ">
          <Sidebar
            toggleSideBar={toggleSideBar}
            isSideBarVisible={isSideBarVisible}
          ></Sidebar>
        </div>

        <section className="z-0  w-full">
          <Navbar className="" toggleSideBar={toggleSideBar}></Navbar>
          <PaymentHistoryTable></PaymentHistoryTable>
        </section>
      </section>
    </>
  );
}

export default PaymentHistoryPage;

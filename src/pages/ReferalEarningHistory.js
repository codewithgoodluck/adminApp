import React, { useState } from "react";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import UserPage from "./UserPage2";
import Sidebar from "../component/Sidebar";
import UserTable from "../component/UserTable";
import Navbar from "../component/Navbar";
import TransactionTable from "../component/TransactionTable";
import PaymentHistoryTable from "../component/PaymentHistoryTable";
import PaymentMethodTable from "../component/PaymentMethodTable";
import BlogPageTable from "../component/BlogPageTable";
import ReferalPageTable from "../component/ReferalPageTable";
import ReferalEarningHistoryTable from "../component/ReferalEarningHistoryTable";

function ReferalEarningHistory() {
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
          {/* <div className="mt-5 flex w-full justify-start mx-10">
            <Link to="/createblog">
              {" "}
              <button className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white ">
                Create New Post
              </button>
            </Link>
          </div> */}
          <ReferalEarningHistoryTable></ReferalEarningHistoryTable>
          
        </section>
      </section>
    </>
  );
}

export default ReferalEarningHistory;

import React, { useState } from "react";
import LogIn from "./Login";

import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import Dashboard from "./Dashboard";
import DashboardPage from "../pages/DashboardPage";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserPage from "../pages/UserPage2";
import Table from "./Table";

function Main() {
  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(true);

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (
    <>
    

<section className=" flex ">
     

     <div className="max-h-screen  ">
       
       <Sidebar
         toggleSideBar={toggleSideBar}
         isSideBarVisible={isSideBarVisible}
       ></Sidebar>
     </div>

     <section className="w-full ">
       <Navbar className="" toggleSideBar={toggleSideBar}></Navbar>
       <DashboardPage className=""></DashboardPage>
       
     </section>
    
     </section>
    </>
  );
}

export default Main;

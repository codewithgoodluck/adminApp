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
import { authService } from "../services/authService";
import { useEffect} from "react";
import {  useNavigate } from "react-router-dom";

function PostPage() {
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
          <div className="mt-5 flex w-full justify-start mx-10">
          {validateRole? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                    
                      >
                   Create New Post
                      </button>
                    ) : (
                      <Link to="/createblog">
                      <button
                        className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                     
                      >
                       Create New Post
                      </button>
                      </Link>
                    )}
                   
           
            
          </div>
          <BlogPageTable></BlogPageTable>
          
        </section>
      </section>
    </>
  );
}

export default PostPage;

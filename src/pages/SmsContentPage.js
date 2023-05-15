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

function SmsContentPage() {
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
          <div className="mx-10 mt-5  rounded-lg bg-white p-5 border-2 w-[80vw]  md:w-[50vw]  ">
            
            <div className="mb-2 mt-3 text-lg font-bold text-center w-full ">SMS Content</div>

            <ul class="list-decimal mx-4">
              <li>User</li>
              <li>Service type (Rental or Receive SMS)</li>
              <li>Application name</li>
              <li>
              <div>
                    <div class="w-[40vw] md:w-[20vw] lg:w-[10vw] ">
                      <select class="w-full rounded-md border-transparent bg-gray-100 px-4 py-2 text-sm focus:border-gray-500 focus:bg-white focus:ring-0">
                        <option value="">Furnish Type</option>
                        <option value="fully-furnished">Fully Furnished</option>
                        <option value="partially-furnished">
                          Partially Furnished
                        </option>
                        <option value="not-furnished">Not Furnished</option>
                      </select>
                    </div>
                  </div>
               
              </li>
            </ul>

           
          </div>

          {/* <ReferalPageTable></ReferalPageTable> */}
        </section>
      </section>
    </>
  );
}

export default SmsContentPage;

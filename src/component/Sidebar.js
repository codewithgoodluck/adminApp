import { useEffect, useState } from "react";
import LogIn from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { VscReferences } from "react-icons/vsc";

import { BsClockHistory, BsWallet, BsSignpost } from "react-icons/bs";
import {
  MdOutlinePayments,
  MdSettingsApplications,
  MdCreateNewFolder,
  MdDashboard,
  MdContactPage,
  MdOutlineCarRental,
  MdOutlineTextsms,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiAdminLine, RiCouponLine, RiUserReceived2Line } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BiLogOutCircle, BiWalletAlt } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import Dashboard from "./Dashboard";
import DashboardPage from "../pages/DashboardPage";
import Navbar from "./Navbar";
import Header_sidebar from "./Header_sidebar";
import { authService } from "../services/authService";

function Sidebar({ toggleSideBar, isSideBarVisible }) {
  const [userRole, setUserRole] = useState();
  const navigate = useNavigate();

  const [validateRole, setValidateRole] = useState();

  function checkRoleValidation(userRole) {
    console.log(userRole);
    if (
      (userRole === "admin" && userRole === "auditor") ||
      userRole === "employee"
    ) {
      setValidateRole(userRole);
    } else if (userRole === "blogger") {
      setValidateRole(userRole);
    }

    // else if (userRole === "employee"){
    //   setValidateRole(userRole);
    // }
  }

  useEffect(() => {
    const role = authService.getUserRole();
    checkRoleValidation(role);
    setUserRole(role);
  }, []);

  const logout = () => {
    authService.logOut();
    navigate("/login");
  };

  return (
    <>
      <div className="hidden md:block">
        <Link to={"/login"}>
          <Header_sidebar />
        </Link>
      </div>

      <section className="">
        <div
          className={`fixed  left-0 z-50  transform bg-[#E3F0FF]  text-lg font-bold text-slate-600 shadow-2xl transition-all md:static md:w-[19vw] ${
            isSideBarVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* ............................................................................           */}
          {/* sidebar content will be here */}
          <div className="ScrollStyle p-4">
            {/* <h1  className='text-2xl font-bold mb-4 pl-6 text-left'>Social Media App</h1> */}
            {!isSideBarVisible ? (
              ""
            ) : (
              <section className=" w-full">
                <div className=" flex  w-full justify-end text-left text-2xl">
                  <GiCancel
                    className=" block text-[#1F45A3] md:hidden"
                    onClick={toggleSideBar}
                    size={30}
                  ></GiCancel>
                </div>
                <div className="text-md my-1 flex transform rounded-lg  border-gray-300  px-2 py-2"></div>

                <section className=" mt-3 ">
                  {!validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <HiOutlineUsers
                          fontSize={30}
                          className="  text-[#8CA7FF]  "
                        ></HiOutlineUsers>
                      </span>

                      <Link to={"/user"}>
                        <span className="pointer  mx-2 mt-1 text-sm">
                          Registered User{" "}
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {!validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white ">
                      <span>
                        <BsClockHistory
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BsClockHistory>
                      </span>

                      <Link to={"/transaction"}>
                        <span className="pointer  mx-2 mt-1 text-sm">
                          Transactions History{" "}
                        </span>
                      </Link>

                      {/* to = "" */}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {!validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <BsWallet
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BsWallet>
                      </span>
                      <Link to={"/paymenthistory"}>
                        <span className="mx-2 mt-1 text-sm">
                          Payments History{" "}
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {!validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white ">
                      <span>
                        <MdOutlinePayments
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlinePayments>
                      </span>
                      <Link to={`/paymentmethod`}>
                        {" "}
                        <span className="mx-2  mt-1 text-sm">
                          Payment Methods{" "}
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {
                    userRole === "employee" && (
                      <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white ">
                      <span>
                        <MdOutlinePayments
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlinePayments>
                      </span>
                      <Link to={`/paymentmethod`}>
                        {" "}
                        <span className="mx-2  mt-1 text-sm">
                          Payment Methods{" "}
                        </span>
                      </Link>
                    </div>
                    )
                  }

                  {validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <BsSignpost
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BsSignpost>
                      </span>
                      <Link to={`/userbog`}>
                        <span className="mx-2  mt-1 text-sm">Post</span>
                      </Link>
                    </div>
                  ) : (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <BsSignpost
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BsSignpost>
                      </span>
                      <Link to={`/userbog`}>
                        <span className="mx-2  mt-1 text-sm">Post</span>
                      </Link>
                    </div>
                  )}

                  {!validateRole ? (
                    <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <GiWorld
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></GiWorld>
                      </span>
                      <Link to={"/country"}>
                        <span className="mx-2 mt-1 text-sm">Countries </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {
                    userRole === "employee" && (
                      <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
                      <span>
                        <GiWorld
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></GiWorld>
                      </span>
                      <Link to={"/country"}>
                        <span className="mx-2 mt-1 text-sm">Countries </span>
                      </Link>
                    </div>
                    )
                  }

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdContactPage
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdContactPage>
                      </span>

                      <Link to={"/landingpage"}>
                        <div className="mx-2  mt-[1vh]  text-sm">
                          Language Page{" "}
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {userRole === "employee" && (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <BiWalletAlt
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BiWalletAlt>
                      </span>
                      <Link to={"/landingpage"} className=" mt-1">
                        <span className="mx-2  text-sm">Language </span>
                      </Link>
                    </div>
                  )}

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <RiCouponLine
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></RiCouponLine>
                      </span>

                      <Link to={"/coupon"} className="mt-1">
                        <span className="mx-2   text-sm">Coupons </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {userRole === "employee" && (
                     <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                     <span>
                       <RiCouponLine
                         fontSize={30}
                         className="  text-[#8CA7FF]"
                       ></RiCouponLine>
                     </span>

                     <Link to={"/coupon"} className="mt-1">
                       <span className="mx-2   text-sm">Coupons </span>
                     </Link>
                   </div>
                  )}

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdSettingsApplications
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdSettingsApplications>
                      </span>
                      <Link to={"/application"} className="mt-1">
                        <span className="mx-2   text-sm">Applications </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {
                    userRole === "employee" && (
                      <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdSettingsApplications
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdSettingsApplications>
                      </span>
                      <Link to={"/application"} className="mt-1">
                        <span className="mx-2   text-sm">Applications </span>
                      </Link>
                    </div>
                    )
                  }

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdOutlineCarRental
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlineCarRental>
                      </span>
                      <Link to={"/rent"} className=" mt-1">
                        <span className="mx-2  text-sm">Rent </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {
                    userRole === "employee" && (
                      <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdOutlineCarRental
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlineCarRental>
                      </span>
                      <Link to={"/rent"} className=" mt-1">
                        <span className="mx-2  text-sm">Rent </span>
                      </Link>
                    </div>
                    ) }


                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <RiUserReceived2Line
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></RiUserReceived2Line>
                      </span>
                      <Link to={"/usage"} className=" mt-1">
                        <span className="mx-2  text-sm">Usage </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {
                    userRole === "employee" && (
                      <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <RiUserReceived2Line
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></RiUserReceived2Line>
                      </span>
                      <Link to={"/usage"} className=" mt-1">
                        <span className="mx-2  text-sm">Usage </span>
                      </Link>
                    </div>
                    )
                  }

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdOutlineTextsms
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlineTextsms>
                      </span>
                      <Link to={"/smscontent"} className=" mt-1">
                        <span className="mx-2  text-sm">SMS Content </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {
                    userRole === "employee" && (
                      <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdOutlineTextsms
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlineTextsms>
                      </span>
                      <Link to={"/smscontent"} className=" mt-1">
                        <span className="mx-2  text-sm">SMS Content </span>
                      </Link>
                    </div>
                    )
                  }

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <VscReferences
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></VscReferences>
                      </span>
                      <Link to={"/referal"} className=" mt-1">
                        <span className="mx-2  text-sm">Referral Program </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {
                    userRole === "employee" && (
                      <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <VscReferences
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></VscReferences>
                      </span>
                      <Link to={"/referal"} className=" mt-1">
                        <span className="mx-2  text-sm">Referral Program </span>
                      </Link>
                    </div>
                    )
                  }

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <BiWalletAlt
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></BiWalletAlt>
                      </span>
                      <Link to={"/wallet"} className=" mt-1">
                        <span className="mx-2  text-sm">Wallet </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <MdOutlineFeedback
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></MdOutlineFeedback>
                      </span>
                      <Link to={"/feedback"} className=" mt-1">
                        <span className="mx-2  text-sm">Feedback </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {!validateRole ? (
                    <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                      <span>
                        <FiSettings
                          fontSize={30}
                          className="  text-[#8CA7FF]"
                        ></FiSettings>
                      </span>
                      <Link to={`/setting`} className="mt-1">
                        <span className="mx-2   text-sm">Settings </span>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}

                

                  {
                    (userRole === "admin",
                    "blogger",
                    "employee",
                    "auditor" && (
                      <div className="my-2  flex transform rounded-lg  px-2 py-10 text-sm hover:bg-slate-400 hover:text-white">
                        <span>
                          <BiLogOutCircle
                            fontSize={30}
                            className="  text-[#8CA7FF]"
                          ></BiLogOutCircle>
                        </span>
                        <span
                          onClick={() => logout()}
                          className="mx-2  mt-1 text-sm"
                        >
                          Logout{" "}
                        </span>
                      </div>
                    ))
                  }
                </section>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// import LogIn from "./Login";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
// import { CgClose, CgMenuGridR } from "react-icons/cg";
// import { HiOutlineUsers } from "react-icons/hi";
// import { VscReferences } from "react-icons/vsc";

// import { BsClockHistory, BsWallet, BsSignpost } from "react-icons/bs";
// import {
//   MdOutlinePayments,
//   MdSettingsApplications,
//   MdCreateNewFolder,
//   MdDashboard,
//   MdContactPage,
//   MdOutlineCarRental,
//   MdOutlineTextsms,
//   MdOutlineFeedback,
// } from "react-icons/md";
// import { RiAdminLine, RiCouponLine, RiUserReceived2Line } from "react-icons/ri";
// import { FaBloggerB } from "react-icons/fa";
// import { GiWorld } from "react-icons/gi";
// import { FiSettings } from "react-icons/fi";
// import { BiLogOutCircle, BiWalletAlt } from "react-icons/bi";
// import { GiCancel } from "react-icons/gi";
// import Dashboard from "./Dashboard";
// import DashboardPage from "../pages/DashboardPage";
// import Navbar from "./Navbar";
// import Header_sidebar from "./Header_sidebar";

// function Sidebar({ toggleSideBar, isSideBarVisible }) {
//   const navigate = useNavigate();

//   return (
//     <>

// <div
//           className={`fixed  left-0 z-50 mt-16 transform bg-[#E3F0FF]  text-lg font-bold text-slate-600 shadow-2xl transition-all md:static md:w-[22vw] ${
//             isSideBarVisible ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* ............................................................................           */}
//           {/* sidebar content will be here */}
//           <div className="ScrollStyle p-4">
//             {/* <h1  className='text-2xl font-bold mb-4 pl-6 text-left'>Social Media App</h1> */}
//             {!isSideBarVisible ? (
//               ""
//             ) : (
//               <section className=" w-full">
//                 <div className=" flex  w-full justify-end text-left text-2xl">
//                   <GiCancel
//                     className=" block text-[#1F45A3] md:hidden"
//                     onClick={toggleSideBar}
//                     size={30}
//                   ></GiCancel>
//                 </div>
//                 <div className="text-md my-1 flex transform rounded-lg  border-gray-300  px-2 py-2"></div>

//                 <section className=" mt-3 ">
//                   <div className="text-md my-2 flex transform rounded-lg px-2 py-2 hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <HiOutlineUsers
//                         fontSize={30}
//                         className="  text-[#8CA7FF]  "
//                       ></HiOutlineUsers>
//                     </span>

//                     <Link to={"/user"}>
//                       <span className="pointer  mx-2 mt-1 text-sm">
//                         Registered User{" "}
//                       </span>
//                     </Link>
//                   </div>

//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white ">
//                     <span>
//                       <BsClockHistory
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></BsClockHistory>
//                     </span>

//                     <Link to={"/transaction"}>
//                       <span className="pointer  mx-2 mt-1 text-sm">
//                         Transactions History{" "}
//                       </span>
//                     </Link>

//                     {/* to = "" */}
//                   </div>
//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <BsWallet
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></BsWallet>
//                     </span>
//                     <Link to={"/paymenthistory"}>
//                       <span className="mx-2 mt-1 text-sm">
//                         Payments History{" "}
//                       </span>
//                     </Link>
//                   </div>

//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white ">
//                     <span>
//                       <MdOutlinePayments
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdOutlinePayments>
//                     </span>
//                     <Link to={`/paymentmethod`}>
//                       {" "}
//                       <span className="mx-2  mt-1 text-sm">
//                         Payment Methods{" "}
//                       </span>
//                     </Link>
//                   </div>
//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <RiAdminLine
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></RiAdminLine>
//                     </span>
//                     <Link to={`/useradmin`}>
//                       <span className="mx-2  mt-1 text-sm">
//                         Manage Admin Users{" "}
//                       </span>
//                     </Link>
//                   </div>
//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <BsSignpost
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></BsSignpost>
//                     </span>
//                     <Link to={`/userbog`}>
//                       <span className="mx-2  mt-1 text-sm">Post </span>
//                     </Link>
//                   </div>

//                   <div className="text-md my-2 flex transform rounded-lg  px-2 py-2 hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <GiWorld
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></GiWorld>
//                     </span>
//                     <Link to={"/country"}>
//                       <span className="mx-2 mt-1 text-sm">Countries </span>
//                     </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <MdContactPage
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdContactPage>
//                     </span>

//                     <Link to={"/landingpage"}>
//                       <div className="mx-2  mt-[1vh]  text-sm">Language Page </div>
//                     </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <RiCouponLine
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></RiCouponLine>
//                     </span>

//                     <Link to={"/coupon"} className="mt-1">
//                       <span className="mx-2   text-sm">Coupons </span>
//                     </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <MdSettingsApplications
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdSettingsApplications>
//                     </span>
//                    <Link to={"/application"} className="mt-1">
//                    <span className="mx-2   text-sm">
//                       Applications{" "}
//                     </span>
//                    </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <MdOutlineCarRental
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdOutlineCarRental>
//                     </span>
//                    <Link to={"/rent"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                       Rent{" "}
//                     </span>
//                    </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <RiUserReceived2Line
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></RiUserReceived2Line>
//                     </span>
//                    <Link to={"/usage"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                       Usage{" "}
//                     </span>
//                    </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <MdOutlineTextsms
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdOutlineTextsms>
//                     </span>
//                    <Link to={"/smscontent"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                    SMS Content{" "}
//                     </span>
//                    </Link>
//                   </div>
//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <VscReferences
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></VscReferences>
//                     </span>
//                    <Link to={"/referal"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                    Referral Program {" "}
//                     </span>
//                    </Link>
//                   </div>

//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <BiWalletAlt
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></BiWalletAlt>
//                     </span>
//                    <Link to={"/wallet"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                    Wallet{" "}
//                     </span>
//                    </Link>
//                   </div>

//                   <div className="my-2  flex transform rounded-lg   px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <MdOutlineFeedback
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></MdOutlineFeedback>
//                     </span>
//                    <Link to={"/feedback"} className=" mt-1">
//                    <span className="mx-2  text-sm">
//                    Feedback{" "}
//                     </span>
//                    </Link>
//                   </div>

//                   <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <FiSettings
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></FiSettings>
//                     </span>
//                     <Link to={`/setting`} className="mt-1">
//                       <span className="mx-2   text-sm">Settings </span>
//                     </Link>
//                   </div>

//                   <div className="my-2  flex transform rounded-lg  px-2 py-10 text-sm hover:bg-slate-400 hover:text-white">
//                     <span>
//                       <BiLogOutCircle
//                         fontSize={30}
//                         className="  text-[#8CA7FF]"
//                       ></BiLogOutCircle>
//                     </span>
//                     <span className="mx-2  mt-1 text-sm">Logout </span>
//                   </div>
//                 </section>
//               </section>
//             )}
//           </div>
//         </div>
//     </>
//   );
// }

// export default Sidebar;

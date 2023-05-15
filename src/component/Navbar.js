import { useEffect, useState } from "react";
import { authService } from "../services/authService";

import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import LogIn from "./Login";
import { CgClose, CgMenuGridR } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import Header_sidebar from "./Header_sidebar";
import { BiLogOutCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./Sidebar";

function Navbar({ toggleSideBar }) {
  const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState();
    const [userRole, setUserRole] = useState();
    const navigate  = useNavigate();

    useEffect(()=> { 
        const role =  authService.getUserRole();
            setUserRole(role);
       
        const email =  authService.getUserEmail();
            setEmail(email);

    },[]);

    const logout = ()=> {
        authService.logOut();
        navigate('/login');
    }

  return (
    <>
 <div className="sticky top-0 fixed z-40  w-full ">
        <div className="fixed mb-0 ml-0 mr-0 mt-0 pb-0 pl-0 pr-0 pt-0"></div>
        <div className="bg-[#0e5686] ">
          <div className="flex flex-col">
            <div className="w-full border-b-2 border-gray-200">
              <div className="mx-auto flex h-16 items-center justify-between bg-white px-4">
                <div onClick={toggleSideBar}>
                  <svg
                    className={`h-10 w-10 fill-current ${
                      isOpen ? "hidden" : "block"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </div>
                <div className=" flex w-full  justify-center md:hidden">
                  <Link to={"/login"}>
                    <Header_sidebar />
                  </Link>
                </div>

                <div className="relative ml-40 mr-auto hidden max-w-xs lg:block">
                  <p className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewbox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0
                        11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </p>
                  <input
                    placeholder="Type to search"
                    type="search"
                    className="w-full rounded-lg border
                border-gray-300 px-3 py-2 pb-2 pl-10 pt-2 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <div className="ml-auto flex  items-center justify-between space-x-5 md:space-x-6">
                  {/* <div className="relative">
                    <p
                      className="rounded-full bg-white pb-1 pl-1 pr-1 pt-1 text-gray-700 transition-all duration-200
                  hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                    >
                      <span className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2rem"
                          height="1.2rem"
                          viewbox="0 0 456.147 456.147"
                          style={{
                            enableBackground: "new 0 0 456.147 456.147",
                          }}
                        >
                          <g>
                            <path d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z" />
                          </g>
                        </svg>
                      </span>
                    </p>
                  </div> */}
                  <div className="relative  ">
                    <p
                      className="rounded-full bg-white pb-1 pl-1 pr-1  pt-1 text-gray-700 transition-all duration-200
                  hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                    >
                      <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center">
                          <span className="flex items-center justify-center">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewbox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                          0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                          0H9"
                              />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p
                      className="absolute -right-1 -top-px inline-flex items-center rounded-full bg-indigo-600 px-1.5 py-0.5
                  text-xs font-semibold text-white"
                    >
                      2
                    </p>
                  </div>
                  <div className="relative flex w-full items-center justify-center">
                    <img
                      src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                      className="btn- mr-6 h-9 w-9 rounded-full bg-gray-300 object-cover"
                      alt=""
                    />
                    <div className="dropdown dropdown-bottom dropdown-end">
                      {/* <label tabIndex={0} className="btn m-1">
                        Click
                      </label> */}
                      <label tabIndex={0} className=" m-1 ">
                        <button className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </button>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                      >
                        <li>
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
                        </li>
                        <li>
                          <div className="my-2  flex transform rounded-lg  px-2 py-2 text-sm hover:bg-slate-400 hover:text-white">
                            <span>
                              <BiLogOutCircle
                                fontSize={30}
                                className="  text-[#8CA7FF]"
                              ></BiLogOutCircle>
                            </span>
                            <span onClick={()=> logout()} className="mx-2  mt-1 text-sm">Logout </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;














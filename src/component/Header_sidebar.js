import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Header_sidebar() {
  const [userRole, setUserRole] = useState();
  const navigate  = useNavigate();

  useEffect(()=> { 
      const role =  authService.getUserRole();
          setUserRole(role);
     
      // const email =  authService.getUserEmail();
      //     setEmail(email);

  },[]);

  const logout = ()=> {
      authService.logOut();
      navigate('/login');
  }
  return (
    <> <div className="text-md  my-1 flex justify-center transform rounded-lg  text-[#1F45A3]   px-4 w-full py-2">
    <span>
      <MdDashboard
        fontSize={30}
        className="  text-white bg-[#1F45A3]"
      ></MdDashboard>
    </span>

    <span className="mx-2 mt-1 uppercase text-xs md:text-sm uppercase text-[#1F45A3] font-bold">
        {userRole} DASHBOARD{" "}
      </span>

    {/* to = "" */}
  </div></>
  )
}

export default Header_sidebar
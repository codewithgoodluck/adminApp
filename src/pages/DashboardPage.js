import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsCash,BsWallet } from "react-icons/bs";
import {FaBalanceScaleLeft } from "react-icons/fa";
import {TiArrowForwardOutline } from "react-icons/ti";
import {TbArrowBigDownLine } from "react-icons/tb";


import { MdPublishedWithChanges } from "react-icons/md";
import Table from "../component/Table";

function DashboardPage() {
  return (
    <>

    <section className="grid md:grid-cols-4 mx-10 dashboardIndex z-0 ">
    <div className="mt-10    ">
        <div className="card  bg-[#F7F9FA] shadow-xl w-[90vw]  md:w-[15vw] md:h-[13vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300 "> 
          <div className="card-body  text-center ">
            <div className="flex justify-center">
              <TbArrowBigDownLine size={40}></TbArrowBigDownLine>
            </div>
            <div className="text-2xl font-bold">3M</div>

            <div className="text-md ">Total Deposit</div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid  place-items-center ">
        <div className="card  bg-[#F7F9FA] shadow-xl w-[90vw]  md:w-[15vw] md:h-[13vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300">
          <div className="card-body  text-center ">
          <div className="flex justify-center">
              <TiArrowForwardOutline size={40}></TiArrowForwardOutline>
            </div>
            <div className="text-2xl font-bold">3M</div>

            <div className="text-sm ">Total withdrawal</div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid  place-items-center ">
        <div className="card  bg-[#F7F9FA] shadow-xl w-[90vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300 md:w-[15vw] md:h-[13vw]">
          <div className="card-body  text-center ">
          <div className="flex justify-center">
              <BsWallet size={40}></BsWallet>
            </div>
            <div className="text-2xl font-bold">3M</div>

            <div className="text-sm ">Avaliabe Balance </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid  place-items-center ">
        <div className="card  bg-[#F7F9FA] shadow-xl w-[90vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300 md:w-[15vw] md:h-[13vw]">
          <div className="card-body  text-center ">
          <div className="flex justify-center">
              <AiOutlineUsergroupAdd size={40}></AiOutlineUsergroupAdd>
            </div>
            <div className="text-2xl font-bold">3M</div>

            <div className="text-sm">Total Users </div>
          </div>
        </div>
      </div>
     
    
    
        </section>

        <section className=" md:grid  place-items-center">
          
            <Table></Table>
        </section>
      
    </>
  );
}

export default DashboardPage;

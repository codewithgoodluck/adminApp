// import Logo from "../assets/logo.svg";
import { MdEmail,MdPassword } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { GrImage } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";



import { Link } from "react-router-dom";
import {
  FaceRounded,
  Facebook,
  GitHub,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import GoogleLogin from "react-google-login";

function CreateCouponForm() {
  return (
    <>
      <div className="h-screen w-full bg-[#F1F7FE] md:grid ">
        <div className="mt-4 px-4 xsm:px-8 sm:px-8 md:col-span-1 md:px-16 ">
          <div className="mt-8 sm:px-8 md:px-0 md:text-center">
            {/* <div className="text-2xl font-bold text-gray-600">Welcome!</div> */}
            <div className="mt-2 text-sm font-semibold text-gray-500">
            Create Coupon
            </div>
          </div>

          <div className="mt-10 grid  place-items-center ">
            <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
              <div className="card-body mt-6 px-8 ">
                <form>
                
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="ml-3 text-xs font-bold text-gray-500"
                    >
                      Coupon Name
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <AiOutlineUserAdd className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Coupon Name"
                        id="emailAddress"
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="ml-3 text-xs font-bold text-gray-500"
                    >
                      Coupon Value
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <AiOutlineUserAdd className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Coupon Value"
                        id="emailAddress"
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>
             

                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="ml-3 text-xs font-bold text-gray-500"
                    >
                      Coupon Expriration Date
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <RiGitRepositoryPrivateFill className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="date"
                        placeholder="Enter Author"
                        id="emailAddress"
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>

                  {/* <button className="mt-6 w-full rounded-md bg-olivine-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-olivine-600">
                Login
              </button> */}
                </form>
              </div>

              <div className="mt-3 mb-4 place-items-center flex justify-center px-8 md:grid">
                <button class="btn font-bold rounded-lg bg-[#1F45A3] px-10 text-white">
                  Add Coupon
                </button>
                
                </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCouponForm;

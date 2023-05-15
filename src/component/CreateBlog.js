// import Logo from "../assets/logo.svg";
import { MdEmail,MdPassword } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { GrImage } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";
import { authService } from "../services/authService";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";




import { Link } from "react-router-dom";
import {
  FaceRounded,
  Facebook,
  GitHub,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import GoogleLogin from "react-google-login";

function CreatePost() {
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
  return (
    <>
      <div className="h-screen w-full bg-[#F1F7FE] md:grid ">
        <div className="mt-4 px-4 xsm:px-8 sm:px-8 md:col-span-1 md:px-16 ">
          <div className="mt-8 sm:px-8 md:px-0 md:text-center">
            {/* <div className="text-2xl font-bold text-gray-600">Welcome!</div> */}
            {validateRole? (
                      <button
                        className="mr-2 mt-2 cursor-not-allowed opacity-50 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                    
                      >
                   Create New Post
                      </button>
                    ) : (
                      <button
                        className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
                     
                      >
                       Create New Post
                      </button>
                    )}
           
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
                      Image URL
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <GrImage className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Your Image URL"
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
                      Title Image
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <AiOutlineUserAdd className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your password"
                        id="emailAddress"
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="ml-3 font-bold text-xs text-gray-500"
                    >
                      Description
                    </label>
                    <div className="relative rounded-md">
                      <textarea className="w-full">
                        lol
                      </textarea>
                      
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="ml-3 text-xs font-bold text-gray-500"
                    >
                      Author
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <RiGitRepositoryPrivateFill className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="text"
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
                  Add More Post
                </button>
                
                </div>

                {/* <div>
                  <span className="font-bold text-[#C7D0E8]">
                    Or log in with your social network
                  </span>
                </div>

                <div className="my-4">
                  <Facebook className=" text-blue-900 mx-2" fontSize="large"/>
                  <Twitter className=" text-[#03A9F4] mx-2" fontSize="large"></Twitter>
                  <GitHub className=" text-black mx-2" fontSize="large"></GitHub>
                  <Telegram className=" text-[#54A9EB] mx-2" fontSize="large"></Telegram>
                </div>
                <div>
                  <GoogleLogin />
                </div> */}
            
              {/* <div className="mt-4 px-8 sm:px-8 md:px-0">
            <div className="text-sm font-semibold text-gray-500 transition duration-200 hover:text-gray-600">
               love
            </div>
            <div className="mt-1 text-sm text-gray-500">
              Don’t have an account?
              <span className="hover:text-bold px-1 text-sm font-semibold text-olivine-500 transition duration-200 hover:text-olivine-600">
               love
              </span>
            </div>
          </div> */}
              {/* <div className="mt-4 font-bold px-8 text-gray-500 sm:pl-8 sm:px-0 md:pl-0">
            OR LOG IN WITH
          </div>
          <div className="mt-4 px-8 flex space-x-4 sm:pl-8 sm:px-0 md:pl-0">
            me
        
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

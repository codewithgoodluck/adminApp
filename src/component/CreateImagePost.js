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

function CreateImagePost() {
  return (
    <>
      <div className="h-screen w-full bg-[#F1F7FE] md:grid ">
        <div className="mt-4 px-4 xsm:px-8 sm:px-8 md:col-span-1 md:px-16 ">
          <div className="mt-8 sm:px-8 md:px-0 md:text-center">
            {/* <div className="text-2xl font-bold text-gray-600">Welcome!</div> */}
            <div className="mt-2 text-sm font-semibold text-gray-500">
          View Image
            </div>
          </div>

          <div className="mt-10 grid  place-items-center ">
            <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
              <div className="card-body mt-6 px-8 ">
                <img src="https://media.licdn.com/dms/image/C4D03AQFMbzuiwCMO5w/profile-displayphoto-shrink_400_400/0/1641271914049?e=1688601600&v=beta&t=jkxympZ0_DEJ_z0iP8OJZhplsusXQxz0MxdH_TrgLks"></img>
              
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

export default CreateImagePost;

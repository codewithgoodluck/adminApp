import { useState } from "react";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaceRounded,
  Facebook,
  GitHub,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import GoogleLogin from "react-google-login";
import { useAuth } from "../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [successme, setSuccess] = useState("");
  const [error, setErrorMsg] = useState("");
  console.log(successme);
  // console.log(error);
  // const toastSuccess = () => {
  //   if (successme === "Logged in!") {
  //     console.log(successme)
  //     toast.success("successful");
  //     setSuccess(" ") // new line
  //   } else if (error==="Username or password is incorrect!") {
  //     console.log(error)
  //     toast.error("Username and Email");
  //     setErrorMsg(" ") // new line
  //   }
  // };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const userData = { email, password };
      const response = await authService.login(userData);
      if (response?.data?.token) {
        authService.setToken(response?.data?.token);
      }
      if (response?.data?.msg) {
        toast.success("Logged in successful");
        console.log(response?.data?.msg);
        setTimeout(() => {
          navigate("/main")
     }, 1000);
      }
    } catch (error) {
      setErrorMsg(error?.response?.data.msg);
      toast.error("Username and Email is not Correct");
    }
  };

  // const submitForm = async (event) => {
  //   event.preventDefault();
  //   const userData = { email, password };
  //   const response = await authService.login(userData);
  //   console.log(response?.data);
  //   console.log(response?.data.msg);
  //   if (response?.data?.token) {
  //     authService.setToken(response?.data?.token);
  //     navigate("/main");
  //   }

  //   if (response?.data.msg) {
  //     setSuccess(response?.data?.msg);
  //   }
  // };
  return (
    <>
      <div className="h-screen w-full bg-[#F1F7FE] md:grid ">
        <div className="mt-4 px-4 xsm:px-8 sm:px-8 md:col-span-1 md:px-16 ">
          <div className="mt-8 sm:px-8 md:px-0 md:text-center">
            <div className="mt-2 text-sm font-semibold text-gray-500">
              Enter your details to start using Newsems
            </div>
          </div>
          <div className="mt-10 grid  place-items-center ">
            <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
              <div className="card-body mt-6 px-8 ">
                <form onSubmit={submitForm}>
                  <div>
                    <label className="ml-3 text-xs text-gray-500">
                      Email Address
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <MdEmail className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your email address or Phone Number"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="ml-3 text-xs text-gray-500">
                      Eenter Password
                    </label>
                    <div className="relative rounded-md">
                      <div className="inset-y-0 pl-3">
                        <MdEmail className="absolute mt-2.5 h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-3 flex place-items-center justify-center px-8 md:grid">
                    <button
                      // onClick={toastSuccess}
                      class="btn rounded-lg bg-[#1F45A3] px-10 font-bold text-white"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default LogIn;

// import React, { useContext, useEffect, useState } from "react";
// import { useCreateLoginMutation } from "../api/apiSlice";
// import { MdEmail } from "react-icons/md";
// import { IoMdLock } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// // import { ApiContext } from "../contextfolderv2/data/ApiContext";
// import {
//   FaceRounded,
//   Facebook,
//   GitHub,
//   Telegram,
//   Twitter,
// } from "@material-ui/icons";
// import GoogleLogin from "react-google-login";
// import { useAuth } from "../api/auth";
// import PrivateRoutes from "../util/PrivateRoutes";

// function LogIn() {
//   const [createLogin] = useCreateLoginMutation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState(" ");
//   const [responseStatement, setResponseStatement] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   // const [user, setUsers] = useContext(ApiContext)
//   //   useEffect(() => {
//   //     console.log(user)
//   //   }, [user])

//   // console.log(token)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await createLogin({ email, password }).unwrap();
//       console.log(response);
//       setResponseStatement(response);
//       navigate("/main");
//     } catch (error) {
//       setErrorMessage(error?.response?.msg);
//     }
//   };

//   return (
//     <>
//       <div className="h-screen w-full bg-[#F1F7FE] md:grid ">
//         <div className="mt-4 px-4 xsm:px-8 sm:px-8 md:col-span-1 md:px-16 ">
//           <div className="mt-8 sm:px-8 md:px-0 md:text-center">
//             <div className="mt-2 text-sm font-semibold text-gray-500">
//               Enter your details to start using Newsems
//             </div>
//           </div>

//           <div className="mt-10 grid  place-items-center ">
//             <div className="card  bg-base-100 shadow-xl md:w-[30vw] ">
//               <div className="card-body mt-6 px-8 ">
//                 <form onSubmit={handleSubmit}>
//                   <div>
//                     <label className="ml-3 text-xs text-gray-500">
//                       Email Address
//                     </label>
//                     <div className="relative rounded-md">
//                       <div className="inset-y-0 pl-3">
//                         <MdEmail className="absolute mt-2.5 h-5 w-5 text-gray-600" />
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="Enter your email address or Phone Number"
//                         value={email}
//                         type="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="ml-3 text-xs text-gray-500">
//                       Eenter Password
//                     </label>
//                     <div className="relative rounded-md">
//                       <div className="inset-y-0 pl-3">
//                         <MdEmail className="absolute mt-2.5 h-5 w-5 text-gray-600" />
//                       </div>
//                       <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         className="mt-1 block w-full rounded-md border-gray-400 bg-gray-100 pl-10 text-sm font-semibold text-gray-600 placeholder:text-sm placeholder:text-gray-400 focus:border-olivine-500 focus:ring-olivine-500"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     class="btn rounded-lg bg-[#1F45A3] px-10 text-white hover:bg-slate-400"
//                   >
//                     LogIn
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LogIn;

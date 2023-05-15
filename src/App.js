import Main from "./component/Main";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route, Router } from "react-router-dom";
import UserPage2 from "./pages/UserPage2";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";
import TransactionPage from "./pages/TransactionPage";
import AdminUserPage from "./pages/AdminUserPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import CreateUserPage from "./pages/CreateUserPage";
import CreateBlogPage from "./pages/CreatePostPage";
import BlogPage from "./pages/PostPage";
import SettingPage from "./pages/SettingPage";
import LogIn from "./component/Login";
import Country from "./pages/Country";
import CreateCountryPage from "./pages/CreateCountryPage";
import CreateAdminPage from "./pages/CreateAdminPage";
import LandingPage from "./pages/LandingPage";
import CreateCouponForm from "./component/CreateCouponForm";
import CouponPage from "./pages/CouponPage";
import CreateCouponPage from "./pages/CreateCouponPage";
import ApplicationPage from "./pages/ApplicationsPages";
import RentPage from "./pages/RentPage";
import UsagePage from "./pages/UsagePage";
import WalletPage from "./pages/WalletPage";
import ReferalPage from "./pages/ReferalPage";
import ReferalEarningHistory from "./pages/ReferalEarningHistory";
import FeedbackPage from "./pages/FeedbackPage";
import SmsContentPage from "./pages/SmsContentPage";
import ApplicationPageCom from "./component/ApplicationPageCom";
import CreateApplicationPage from "./pages/CreateApplicationPage";
import ViePostImage from "./pages/ViePostImage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AdminPrivateRoute } from "./routes/AdminRoute";
import { EmployeePrivateRoute } from "./routes/Employee";
import { BloggerPrivateRoute } from "./routes/Blogger";
import { Toaster } from "react-hot-toast";
import { AuditorPrivateRoute } from "./routes/Auditor";
// import Layout from "./pages/layout/Layout";



function App() {
  return (
    <div className="center">
      <Routes>
        <Route path="/user" element={<UserPage2 />}></Route>
        {/* <Route path="/layout" element={<Layout/>}></Route> */}
      

        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route
            path="/transaction"
            element={<TransactionPage></TransactionPage>}
          ></Route>
          <Route
            path="/paymenthistory"
            element={<PaymentHistoryPage></PaymentHistoryPage>}
          ></Route>
          <Route
            path="/paymentmethod"
            element={<PaymentMethodPage></PaymentMethodPage>}
          ></Route>
          <Route
            path="/useradmin"
            element={<AdminUserPage></AdminUserPage>}
          ></Route>
          <Route
            path="/createuser"
            element={<CreateUserPage></CreateUserPage>}
          ></Route>
          <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/createblog"
            element={<CreateBlogPage></CreateBlogPage>}
          ></Route>
          <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
          <Route path="/country" element={<Country></Country>}></Route>
          <Route
            path="/createcountry"
            element={<CreateCountryPage></CreateCountryPage>}
          ></Route>
          <Route
            path="/landingpage"
            element={<LandingPage></LandingPage>}
          ></Route>
          <Route
            path="/createadmin"
            element={<CreateAdminPage></CreateAdminPage>}
          ></Route>
          <Route
            path="/createcoupon"
            element={<CreateCouponPage></CreateCouponPage>}
          ></Route>
          <Route path="/coupon" element={<CouponPage></CouponPage>}></Route>
          <Route
            path="/application"
            element={<ApplicationPage></ApplicationPage>}
          ></Route>
          <Route path="/rent" element={<RentPage></RentPage>}></Route>
          <Route path="/usage" element={<UsagePage></UsagePage>}></Route>
          <Route path="/wallet" element={<WalletPage></WalletPage>}></Route>
          <Route path="/referal" element={<ReferalPage></ReferalPage>}></Route>
          <Route
            path="/referalearn"
            element={<ReferalEarningHistory></ReferalEarningHistory>}
          ></Route>
          <Route
            path="/feedback"
            element={<FeedbackPage></FeedbackPage>}
          ></Route>
          <Route
            path="/smscontent"
            element={<SmsContentPage></SmsContentPage>}
          ></Route>
          <Route
            path="/applicationcom"
            element={<CreateApplicationPage></CreateApplicationPage>}
          ></Route>

          <Route path="/viewimage" element={<ViePostImage />}>
            {" "}
          </Route>
        </Route>

        <Route element={<AdminPrivateRoute></AdminPrivateRoute>}>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route
            path="/transaction"
            element={<TransactionPage></TransactionPage>}
          ></Route>
          <Route
            path="/paymenthistory"
            element={<PaymentHistoryPage></PaymentHistoryPage>}
          ></Route>
          <Route
            path="/paymentmethod"
            element={<PaymentMethodPage></PaymentMethodPage>}
          ></Route>
          <Route
            path="/useradmin"
            element={<AdminUserPage></AdminUserPage>}
          ></Route>
          <Route
            path="/createuser"
            element={<CreateUserPage></CreateUserPage>}
          ></Route>
          <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/createblog"
            element={<CreateBlogPage></CreateBlogPage>}
          ></Route>
          <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
          <Route path="/country" element={<Country></Country>}></Route>
          <Route
            path="/createcountry"
            element={<CreateCountryPage></CreateCountryPage>}
          ></Route>
          <Route
            path="/landingpage"
            element={<LandingPage></LandingPage>}
          ></Route>
          <Route
            path="/createadmin"
            element={<CreateAdminPage></CreateAdminPage>}
          ></Route>
          <Route
            path="/createcoupon"
            element={<CreateCouponPage></CreateCouponPage>}
          ></Route>
          <Route path="/coupon" element={<CouponPage></CouponPage>}></Route>
          <Route
            path="/application"
            element={<ApplicationPage></ApplicationPage>}
          ></Route>
          <Route path="/rent" element={<RentPage></RentPage>}></Route>
          <Route path="/usage" element={<UsagePage></UsagePage>}></Route>
          <Route path="/wallet" element={<WalletPage></WalletPage>}></Route>
          <Route path="/referal" element={<ReferalPage></ReferalPage>}></Route>
          <Route
            path="/referalearn"
            element={<ReferalEarningHistory></ReferalEarningHistory>}
          ></Route>
          <Route
            path="/feedback"
            element={<FeedbackPage></FeedbackPage>}
          ></Route>
          <Route
            path="/smscontent"
            element={<SmsContentPage></SmsContentPage>}
          ></Route>
          <Route
            path="/applicationcom"
            element={<CreateApplicationPage></CreateApplicationPage>}
          ></Route>

          <Route path="/viewimage" element={<ViePostImage />}>
            {" "}
          </Route>
        </Route>
      
        <Route element={<AuditorPrivateRoute></  AuditorPrivateRoute>}>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route
            path="/transaction"
            element={<TransactionPage></TransactionPage>}
          ></Route>
          <Route
            path="/paymenthistory"
            element={<PaymentHistoryPage></PaymentHistoryPage>}
          ></Route>
          <Route
            path="/paymentmethod"
            element={<PaymentMethodPage></PaymentMethodPage>}
          ></Route>
          <Route
            path="/useradmin"
            element={<AdminUserPage></AdminUserPage>}
          ></Route>
          <Route
            path="/createuser"
            element={<CreateUserPage></CreateUserPage>}
          ></Route>
          <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/createblog"
            element={<CreateBlogPage></CreateBlogPage>}
          ></Route>
          <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
          <Route path="/country" element={<Country></Country>}></Route>
          <Route
            path="/createcountry"
            element={<CreateCountryPage></CreateCountryPage>}
          ></Route>
          <Route
            path="/landingpage"
            element={<LandingPage></LandingPage>}
          ></Route>
          <Route
            path="/createadmin"
            element={<CreateAdminPage></CreateAdminPage>}
          ></Route>
          <Route
            path="/createcoupon"
            element={<CreateCouponPage></CreateCouponPage>}
          ></Route>
          <Route path="/coupon" element={<CouponPage></CouponPage>}></Route>
          <Route
            path="/application"
            element={<ApplicationPage></ApplicationPage>}
          ></Route>
          <Route path="/rent" element={<RentPage></RentPage>}></Route>
          <Route path="/usage" element={<UsagePage></UsagePage>}></Route>
          <Route path="/wallet" element={<WalletPage></WalletPage>}></Route>
          <Route path="/referal" element={<ReferalPage></ReferalPage>}></Route>
          <Route
            path="/referalearn"
            element={<ReferalEarningHistory></ReferalEarningHistory>}
          ></Route>
          <Route
            path="/feedback"
            element={<FeedbackPage></FeedbackPage>}
          ></Route>
          <Route
            path="/smscontent"
            element={<SmsContentPage></SmsContentPage>}
          ></Route>
          <Route
            path="/applicationcom"
            element={<CreateApplicationPage></CreateApplicationPage>}
          ></Route>

          <Route path="/viewimage" element={<ViePostImage />}>
            {" "}
          </Route>
        </Route>

        <Route element={<BloggerPrivateRoute></BloggerPrivateRoute>}>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/createblog"
            element={<CreateBlogPage></CreateBlogPage>}
          ></Route>
          
        </Route>

        <Route element={<EmployeePrivateRoute></EmployeePrivateRoute>}>
          <Route path="/main" element={<Main></Main>}></Route>
          {/* <Route
            path="/transaction"
            element={<TransactionPage></TransactionPage>}
          ></Route> */}
          {/* <Route
            path="/paymenthistory"
            element={<PaymentHistoryPage></PaymentHistoryPage>}
          ></Route> */}
          <Route
            path="/paymentmethod"
            element={<PaymentMethodPage></PaymentMethodPage>}
          ></Route>
          {/* <Route
            path="/useradmin"
            element={<AdminUserPage></AdminUserPage>}
          ></Route> */}
          {/* <Route
            path="/createuser"
            element={<CreateUserPage></CreateUserPage>}
          ></Route> */}
          <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/createblog"
            element={<CreateBlogPage></CreateBlogPage>}
          ></Route>
          {/* <Route path="/setting" element={<SettingPage></SettingPage>}></Route> */}
          <Route path="/country" element={<Country></Country>}></Route>
          <Route
            path="/createcountry"
            element={<CreateCountryPage></CreateCountryPage>}
          ></Route>
          <Route
            path="/landingpage"
            element={<LandingPage></LandingPage>}
          ></Route>
          <Route
            path="/createadmin"
            element={<CreateAdminPage></CreateAdminPage>}
          ></Route>
          <Route
            path="/createcoupon"
            element={<CreateCouponPage></CreateCouponPage>}
          ></Route>
          <Route path="/coupon" element={<CouponPage></CouponPage>}></Route>
          <Route
            path="/application"
            element={<ApplicationPage></ApplicationPage>}
          ></Route>
          <Route path="/rent" element={<RentPage></RentPage>}></Route>
          <Route path="/usage" element={<UsagePage></UsagePage>}></Route>
          {/* <Route path="/wallet" element={<WalletPage></WalletPage>}></Route> */}
          <Route path="/referal" element={<ReferalPage></ReferalPage>}></Route>
          <Route
            path="/referalearn"
            element={<ReferalEarningHistory></ReferalEarningHistory>}
          ></Route>
          <Route
            path="/feedback"
            element={<FeedbackPage></FeedbackPage>}
          ></Route>
          <Route
            path="/smscontent"
            element={<SmsContentPage></SmsContentPage>}
          ></Route>
          <Route
            path="/applicationcom"
            element={<CreateApplicationPage></CreateApplicationPage>}
          ></Route>

          {/* <Route path="/viewimage" element={<ViePostImage />}>
            {" "}
          </Route> */}
        </Route>

        <Route path="/" element={<LogIn />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

// import Main from "./component/Main";
// import DashboardPage from "./pages/DashboardPage";
// import { Routes, Route, Router } from "react-router-dom";
// import UserPage2 from "./pages/UserPage2";
// import PaymentHistoryPage from "./pages/PaymentHistoryPage";
// import TransactionPage from "./pages/TransactionPage";
// import AdminUserPage from "./pages/AdminUserPage";
// import PaymentMethodPage from "./pages/PaymentMethodPage";
// import CreateUserPage from "./pages/CreateUserPage";
// import CreateBlogPage from "./pages/CreatePostPage";
// import BlogPage from "./pages/PostPage";
// import SettingPage from "./pages/SettingPage";
// import LogIn from "./component/Login";
// import Country from "./pages/Country";
// import CreateCountryPage from "./pages/CreateCountryPage";
// import CreateAdminPage from "./pages/CreateAdminPage";
// import LandingPage from "./pages/LandingPage";
// import CreateCouponForm from "./component/CreateCouponForm";
// import CouponPage from "./pages/CouponPage";
// import CreateCouponPage from "./pages/CreateCouponPage";
// import ApplicationPage from "./pages/ApplicationsPages";
// import RentPage from "./pages/RentPage";
// import UsagePage from "./pages/UsagePage";
// import WalletPage from "./pages/WalletPage";
// import ReferalPage from "./pages/ReferalPage";
// import ReferalEarningHistory from "./pages/ReferalEarningHistory";
// import FeedbackPage from "./pages/FeedbackPage";
// import SmsContentPage from "./pages/SmsContentPage";
// import ApplicationPageCom from "./component/ApplicationPageCom";
// import CreateApplicationPage from "./pages/CreateApplicationPage";
// import ViePostImage from "./pages/ViePostImage";

// import PrivateRoutes from "./util/PrivateRoutes";
// import Layout from "./pages/Layout";

// function App() {
//   return (
//     <div className="center">
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/user" element={<UserPage2 />}></Route>
//           <Route
//             path="/transaction"
//             element={<TransactionPage></TransactionPage>}
//           ></Route>
//           <Route
//             path="/paymenthistory"
//             element={<PaymentHistoryPage></PaymentHistoryPage>}
//           ></Route>
//           <Route
//             path="/paymentmethod"
//             element={<PaymentMethodPage></PaymentMethodPage>}
//           ></Route>
//           <Route
//             path="/useradmin"
//             element={<AdminUserPage></AdminUserPage>}
//           ></Route>
//           <Route
//             path="/createuser"
//             element={<CreateUserPage></CreateUserPage>}
//           ></Route>
//           <Route path="/userbog" element={<BlogPage></BlogPage>}></Route>
//           <Route
//             path="/createblog"
//             element={<CreateBlogPage></CreateBlogPage>}
//           ></Route>

//           <Route element={<PrivateRoutes />}>
//             <Route
//               path="/setting"
//               element={<SettingPage></SettingPage>}
//             ></Route>
//             <Route path="/country" element={<Country></Country>}></Route>
//           </Route>

//           <Route
//             path="/createcountry"
//             element={<CreateCountryPage></CreateCountryPage>}
//           ></Route>
//           <Route
//             path="/landingpage"
//             element={<LandingPage></LandingPage>}
//           ></Route>
//           <Route
//             path="/createadmin"
//             element={<CreateAdminPage></CreateAdminPage>}
//           ></Route>

//           <Route
//             path="/createcoupon"
//             element={<CreateCouponPage></CreateCouponPage>}
//           ></Route>
//           <Route path="/coupon" element={<CouponPage></CouponPage>}></Route>
//           <Route
//             path="/application"
//             element={<ApplicationPage></ApplicationPage>}
//           ></Route>
//           <Route path="/rent" element={<RentPage></RentPage>}></Route>
//           <Route path="/usage" element={<UsagePage></UsagePage>}></Route>
//           <Route path="/wallet" element={<WalletPage></WalletPage>}></Route>
//           <Route path="/referal" element={<ReferalPage></ReferalPage>}></Route>
//           <Route
//             path="/referalearn"
//             element={<ReferalEarningHistory></ReferalEarningHistory>}
//           ></Route>
//           <Route
//             path="/feedback"
//             element={<FeedbackPage></FeedbackPage>}
//           ></Route>
//           <Route
//             path="/smscontent"
//             element={<SmsContentPage></SmsContentPage>}
//           ></Route>
//           <Route
//             path="/applicationcom"
//             element={<CreateApplicationPage></CreateApplicationPage>}
//           ></Route>
//           <Route path="/main" element={<Main></Main>}></Route>
//           <Route path="/viewimage" element={<ViePostImage />}>
//             {" "}
//           </Route>

//           {/* <Route path="/" element={<LogIn />}></Route> */}
//           <Route path="/login" element={<LogIn />}></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

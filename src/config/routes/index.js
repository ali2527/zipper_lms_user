import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components imports
import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";
import Homepage from "../../views/homepage";
import Signin from "../../views/signin";
import ForgotPassword from "../../views/forget-password-1";
import ForgotPassword2 from "../../views/forget-password-2";
import ForgotPassword3 from "../../views/forget-password-3";
import AboutUs from "../../views/about-us";
import ContactUs from "../../views/contact-us"
import Tutor from "../../views/tutor"
import Coach from "../../views/coach"
import TutorDetails from "../../views/tutor-details"
import CoachDetails from "../../views/coach-details"
import Dashboard from "../../views/dashboard"


const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <Signin />{" "}
            </ClientLayout>
          }
        />
        <Route
          path="/forgot-password"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <ForgotPassword />{" "}
            </ClientLayout>
          }
        />
        <Route
          path="/forgot-password-2"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <ForgotPassword2 />{" "}
            </ClientLayout>
          }
        />

        <Route
          path="/forgot-password-3"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <ForgotPassword3 />{" "}
            </ClientLayout>
          }
        />

        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-2" element={<ForgotPassword />} />
        <Route path="/forgot-password-3" element={<ForgotPassword />} /> */}
        <Route
          path="/"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Homepage />
            </ClientLayout>
          }
        />

<Route
          path="/about-us"
          index
          element={
            <ClientLayout
              head={{ title: "About Us", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <AboutUs />
            </ClientLayout>
          }
        />

<Route
          path="/contact-us"
          index
          element={
            <ClientLayout
              head={{ title: "Contact Us", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ContactUs/>
            </ClientLayout>
          }
        />

<Route
          path="/tutor"
          index
          element={
            <ClientLayout
              head={{ title: "Tutor", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Tutor/>
            </ClientLayout>
          }
        />

<Route
          path="/coach"
          index
          element={
            <ClientLayout
              head={{ title: "Coach", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Coach/>
            </ClientLayout>
          }
        />

<Route
          path="/tutor-details"
          index
          element={
            <ClientLayout
              head={{ title: "Tutor Details", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <TutorDetails/>
            </ClientLayout>
          }
        />

<Route
          path="/coach-details"
          index
          element={
            <ClientLayout
              head={{ title: "Coach Details", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CoachDetails/>
            </ClientLayout>
          }
        />


<Route
          path="/dashboard"
          index
          element={
            <ClientLayout
              head={{ title: "Dashboard", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Dashboard/>
            </ClientLayout>
          }
        />



      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components imports
import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";
import Signin from "../../views/signin";
import ForgotPassword from "../../views/forget-password-1"
import ForgotPassword2 from "../../views/forget-password-2";
import ForgotPassword3 from "../../views/forget-password-3";


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
              <h1>Dashboard</h1>
            </ClientLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;

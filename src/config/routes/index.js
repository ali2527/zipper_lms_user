import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//components imports
import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";


const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" index element={<div><h1>Signin</h1></div>} />
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
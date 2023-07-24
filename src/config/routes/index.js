import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components imports
import UserAuthCheck from "../../components/AuthCheck/UserAuthCheck";
// import AdminAuthCheck from "../../components/AuthCheck/AdminAuthCheck";
import ClientLayout from "../../components/ClientLayout";
import Homepage from "../../views/homepage";
import Signin from "../../views/signin";
import Signup from "../../views/signup";
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
import UpcomingLessons from '../../views/upcoming-lessons'
import CompletedLessons from "../../views/completed-lessons";
import BookingLogs from "../../views/booking-logs";
import PaymentLogs from "../../views/payment-logs";
import LessonDetail from "../../views/lesson-detail"
import Chat from "../../views/chat"
import Calander from "../../views/calander"
import MyCalander from "../../views/myCalander"


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
          path="/signup"
          index
          element={
            <ClientLayout
              head={{ title: "Signup", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <Signup />{" "}
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

<Route
          path="/upcoming-lessons"
          index
          element={
            <ClientLayout
              head={{ title: "Upcoming Lessons", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <UpcomingLessons/>
            </ClientLayout>
          }
        />

<Route
          path="/completed-lessons"
          index
          element={
            <ClientLayout
              head={{ title: "Completed Lessons", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CompletedLessons/>
            </ClientLayout>
          }
        />

<Route
          path="/booking-logs"
          index
          element={
            <ClientLayout
              head={{ title: "Completed Lessons", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <BookingLogs/>
            </ClientLayout>
          }
        />

<Route
          path="/payment-logs"
          index
          element={
            <ClientLayout
              head={{ title: "Completed Lessons", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PaymentLogs/>
            </ClientLayout>
          }
        />

<Route
          path="/lesson-detail"
          index
          element={
            <ClientLayout
              head={{ title: "Upcoming Lessons", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <LessonDetail/>
            </ClientLayout>
          }
        />

<Route
          path="/chat"
          index
          element={
            <ClientLayout
              head={{ title: "chat", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Chat/>
            </ClientLayout>
          }
        />

<Route
          path="/calander"
          index
          element={
            <ClientLayout
              head={{ title: "chat", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Calander/>
            </ClientLayout>
          }
        />

<Route
          path="/my-calander"
          index
          element={
            <ClientLayout
              head={{ title: "chat", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MyCalander/>
            </ClientLayout>
          }
        />


      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;

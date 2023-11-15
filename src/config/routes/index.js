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
import Course from "../../views/course"
import MyCourse from "../../views/my-course"
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
import Profile from "../../views/profile"
import ChangePassword from "../../views/change-password";
import Payment from "../../views/payment"
import Notifications from "../../views/notifications";
import CourseDetails from "../../views/course-details";
import MyCourseDetails from "../../views/my-course-details";
import LectureDetails from "../../views/lecture-details";
import CoachCourses from "../../views/coach-courses"
import PrivacyPolicy from "../../views/privacy-policy"
import TermsAndConditions from "../../views/terms-conditions"

const MyRouter = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/signin"
          
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
          path="/profile"
          
          element={
            <ClientLayout
              head={{ title: "Profile", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              footer={false}
            >
              <Profile />{" "}
            </ClientLayout>
          }
        />

<Route
          path="/notifications"
          
          element={
            <ClientLayout
              head={{ title: "Notifications", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
              
            >
              <Notifications />{" "}
            </ClientLayout>
          }
        />

        <Route
          path="/forgot-password"
          
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
          path="/change-password"
          
          element={
            <ClientLayout
              head={{ title: "Change Password", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <ChangePassword />
            </ClientLayout>
          }
        />

<Route
          path="/about-us"
          
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
          path="/privacy-policy"
          
          element={
            <ClientLayout
              head={{ title: "Privacy Policy", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <PrivacyPolicy />
            </ClientLayout>
          }
        />

<Route
          path="/terms-and-conditions"
          
          element={
            <ClientLayout
              head={{ title: "Terms and Conditions", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <TermsAndConditions />
            </ClientLayout>
          }
        />

<Route
          path="/contact-us"
          
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
          path="/course"
          
          element={
            <ClientLayout
              head={{ title: "Course", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Course/>
            </ClientLayout>
          }
        />
        
<Route
          path="/courses/:id"
          
          element={
            <ClientLayout
              head={{ title: "Coach Courses", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CoachCourses/>
            </ClientLayout>
          }
        />


<Route
          path="/my-courses"
          
          element={
            <ClientLayout
              head={{ title: "My Courses", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MyCourse/>
            </ClientLayout>
          }
        />


<Route
          path="/course-details/:id"
          
          element={
            <ClientLayout
              head={{ title: "Course Details", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <CourseDetails/>
            </ClientLayout>
          }
        />

<Route
          path="/lecture-details/:id"
          
          element={
            <ClientLayout
              head={{ title: "Lecture Details", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <LectureDetails/>
            </ClientLayout>
          }
        />

<Route
          path="/my-course-details/:id"
          
          element={
            <ClientLayout
              head={{ title: "My Course Details", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <MyCourseDetails/>
            </ClientLayout>
          }
        />


<Route
          path="/tutor-details/:id"
          
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
          path="/coach-details/:id"
          
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
          path="/booking-logs"
          
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
          path="/payment/:id"
          exact
          element={
            <ClientLayout
              head={{ title: "Payment", description: "Some Description." }}
              headerStyle={{ height: { base: "40px", md: 14 } }}
            >
              <Payment/>
            </ClientLayout>
          }
        />


<Route
          path="/lesson-detail/:id"
          
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
          path="/calander/:id"
          
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

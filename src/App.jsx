import { BrowserRouter  } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import WebsiteLayout from "./layouts/WebsiteLayout"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CourseDetails from "./components/courses/CourseDetails"
import LiveSessions from "./pages/Live"
import LiveSessionDetails from "./components/live/LiveDetails"
import PricingPage from "./pages/Pricing"
import FAQPage from "./pages/res/FAQ"
import CareersPage from "./pages/res/Careers"
import ContactPage from "./pages/res/Contact"
import TermsPage from "./pages/res/TermsPage"
import PrivacyPage from "./pages/res/Privacy"
import AboutPage from "./pages/res/About"
import ProfilePage from "./pages/student/Profile"
import MyCoursesPage from "./pages/student/MyCourses"
import MyLiveSessionsPage from "./pages/student/MyLives"
import SettingsPage from "./pages/student/Settings"
import CourseCheckoutPage from "./pages/course/Checkout"
import CourseLearnPage from "./pages/course/Learn"
import SubscriptionCheckoutPage from "./pages/plan/Subscribe"
import LiveSessionRegisterPage from "./pages/live/Register"
import LiveSessionPage from "./pages/live/Watch"


function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="live" element={<LiveSessions />} />
          <Route path="live/:id" element={<LiveSessionDetails />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses/:id/checkout" element={<CourseCheckoutPage />} />
          <Route path="courses/:id/learn" element={<CourseLearnPage />} />
          <Route path="subscribe" element={<SubscriptionCheckoutPage />} />
          <Route path="live/:id/register" element={<LiveSessionRegisterPage />} />
          <Route path="live/:id/watch" element={<LiveSessionPage />} />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="my-courses" element={<MyCoursesPage />} />
          <Route path="my-live-sessions" element={<MyLiveSessionsPage />} />
          <Route path="settings" element={<SettingsPage />} />


          {/* TO DO ZYD MENTOR ( INTRUCTOR ROUTES ) */}


          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
    </BrowserRouter>


  )
}

export default App

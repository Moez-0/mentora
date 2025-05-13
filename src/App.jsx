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
import MentorDashboard from "./pages/mentor/MentorDashboard"
import MentorCoursePage from "./pages/mentor/MentorCoursePage"
import MentorCreateCoursePage from "./pages/mentor/MentorCreateCoursePage"
import MentorSessionPage from "./pages/mentor/MentorSessionPage"
import MentorStudentPage from "./pages/mentor/MentorStudentPage"
import MentorEarningsPage from "./pages/mentor/MentorEarningsPage"
import MentorAnalyticsPage from "./pages/mentor/MentorAnalyticsPage"
import MentorCreateSessionPage from "./pages/mentor/MentorCreateSessionPage"
import MentorEditSessionPage from "./pages/mentor/MentorEditSessionPage"
import MentorEditCoursePage from "./pages/mentor/MentorEditCoursePage"
import MentorMessagesPage from "./pages/mentor/MentorMessagesPage"
import MentorStudentsPage from "./pages/mentor/MentorStudentsPage"
import MentorCoursesPage from "./pages/mentor/MentorCoursesPage"
import MentorSessionsPage from "./pages/mentor/MentorSessionsPage"
import CourseContentPage from "./pages/mentor/course/CourseContentPage"
import EditLessonPage from "./pages/mentor/course/EditLessonPage"
import EditModulePage from "./pages/mentor/course/EditModulePage"


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
         
         
          <Route path="mentor" element={<MentorDashboard />} />
          <Route path="mentor/courses" element={<MentorCoursesPage />} />
          <Route path="mentor/courses/:id" element={<MentorCoursePage />} />
          <Route path="mentor/courses/new" element={<MentorCreateCoursePage />} />
          <Route path="mentor/courses/:id/edit" element={<MentorEditCoursePage />} />
          <Route path="mentor/courses/:id/content" element={<CourseContentPage />} />
          <Route path="mentor/courses/:courseId/modules/new" element={<EditModulePage />} />
          <Route path="/mentor/courses/:courseId/modules/:moduleId/edit" element={<EditModulePage />} />
          <Route path="mentor/courses/:courseId/modules/:moduleId/lessons/new" element={<EditLessonPage />} />
          <Route path="mentor/courses/:courseId/modules/:moduleId/lessons/:lessonId/edit" element={<EditLessonPage />} />
          
          <Route path="mentor/sessions" element={<MentorSessionsPage />} />
          <Route path="mentor/sessions/:id" element={<MentorSessionPage />} />
          <Route path="mentor/sessions/new" element={<MentorCreateSessionPage />} />
          <Route path="mentor/sessions/:id/edit" element={<MentorEditSessionPage />} />
          <Route path="mentor/sessions/:id" element={<LiveSessionPage />} />
          <Route path="mentor/students" element={<MentorStudentsPage />} />
          <Route path="mentor/students/:id" element={<MentorStudentPage />} />
          <Route path="mentor/earnings" element={<MentorEarningsPage />} />
          <Route path="mentor/analytics" element={<MentorAnalyticsPage />} />
          <Route path="mentor/messages" element={<MentorMessagesPage />} />
          


          {/* TO DO ZYD ADMIN ROUTES */}

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
    </BrowserRouter>


  )
}

export default App

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Register } from "./components/register";
import { VerifyOtp } from "./components/verifyotp";
import { HomePage } from "./components/homepage";
import { LoginSignup } from "./components/login-signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AddCourse } from "./components/AddCourse";
import { Courses } from "./components/Courses";
import { Invoice } from "./components/test";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/" element={< HomePage/>} />
          <Route path="/courses" element={< Courses/>} />
          <Route path="/invoice" element={< Invoice/>} />

          {/* Protect Routes */}
          <Route path="/addcourse" element={<ProtectedRoute> <AddCourse /> </ProtectedRoute>}/>
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;

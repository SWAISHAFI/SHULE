import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your role components
import Admin from "./roles/Admin";
import Academic from "./roles/Academic";
import ClassTeacher from "./roles/ClassTeacher";
import SubjectTeacher from "./roles/SubjectTeacher";
import Parent from "./roles/Parent";

// Optional: Login page
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Role Dashboards */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/class-teacher" element={<ClassTeacher />} />
        <Route path="/subject-teacher" element={<SubjectTeacher />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </Router>
  );
}

export default App;

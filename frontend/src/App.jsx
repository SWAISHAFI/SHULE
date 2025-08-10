import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Admin from "./roles/Admin";
import AcademicTeacher from "./roles/AcademicTeacher";
import ClassTeacher from "./roles/ClassTeacher";
import SubjectTeacher from "./roles/SubjectTeacher";
import Parent from "./roles/Parent";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">School Management System</h1>
      </header>

      <nav className="bg-gray-200 p-3 flex space-x-4">
        <Link to="/admin" className="text-blue-700 hover:underline">Admin</Link>
        <Link to="/academic-teacher" className="text-blue-700 hover:underline">Academic</Link>
        <Link to="/class-teacher" className="text-blue-700 hover:underline">Class Teacher</Link>
        <Link to="/subject-teacher" className="text-blue-700 hover:underline">Subject Teacher</Link>
        <Link to="/parent" className="text-blue-700 hover:underline">Parent</Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2 className="text-xl font-semibold mb-4">Welcome to School Management System</h2>
                <p>Please select a role to continue:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><Link to="/admin" className="text-blue-600 hover:underline">Admin</Link></li>
                  <li><Link to="/academic-teacher" className="text-blue-600 hover:underline">Academic Teacher</Link></li>
                  <li><Link to="/class-teacher" className="text-blue-600 hover:underline">Class Teacher</Link></li>
                  <li><Link to="/subject-teacher" className="text-blue-600 hover:underline">Subject Teacher</Link></li>
                  <li><Link to="/parent" className="text-blue-600 hover:underline">Parent</Link></li>
                </ul>
              </div>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/academic-teacher" element={<AcademicTeacher />} />
          <Route path="/class-teacher" element={<ClassTeacher />} />
          <Route path="/subject-teacher" element={<SubjectTeacher />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

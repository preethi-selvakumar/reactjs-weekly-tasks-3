import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import withRoleProtection from './hocs/withRoleProtection';

const ProtectedCourseDetail = withRoleProtection(CourseDetail, 'student');

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<ProtectedCourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
};

export default App;

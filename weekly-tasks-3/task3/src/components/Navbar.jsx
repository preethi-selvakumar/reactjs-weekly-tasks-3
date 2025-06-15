import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const loginAs = (r) => {
        localStorage.setItem('role', r);
        alert(`Logged in as ${r}`);
        if (r === 'instructor') {
            navigate('/dashboard');
        } else {
            navigate('/courses');
        }
    };

    const logout = () => {
        localStorage.removeItem('role');
        alert('Logged out');
        navigate('/courses');
    };

    return (
        <nav className="nav">
            <Link to="/courses" className="btn">Courses</Link>
            {role === 'instructor' && (
                <Link to="/dashboard" className="btn">Dashboard</Link>
            )}
            <button className="btn" onClick={() => loginAs('student')}>Login as Student</button>
            <button className="btn" onClick={() => loginAs('instructor')}>Login as Instructor</button>
            <button className="btn" onClick={logout}>Logout</button>
        </nav>
    );
}

export default Navbar;

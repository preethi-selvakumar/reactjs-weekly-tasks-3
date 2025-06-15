import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/api';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((res) => setCourses(res.data));
    }, []);

    return (
        <div className="container">
            <h1>All Courses</h1>
            <div className="grid">
                {courses.map(course => (
                    <div className="card" key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <Link to={`/courses/${course.id}`} className="btn">
                            View Course
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;

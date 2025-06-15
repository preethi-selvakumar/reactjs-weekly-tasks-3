import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById, getQuizByCourseId } from '../api/api';
import VideoModal from '../components/VideoModal';
import QuizModal from '../components/QuizModal';

const CourseDetail = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const [quiz, setQuiz] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);

    const role = localStorage.getItem('role');

    useEffect(() => {
        if (!role) {
            alert("Access denied. Please login as student or instructor.");
            navigate('/courses');
            return;
        }

        getCourseById(courseId).then((res) => setCourse(res.data));
        getQuizByCourseId(courseId).then((quizData) => setQuiz(quizData));
    }, [courseId, role, navigate]);

    if (!course) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <button className="btn" onClick={() => setShowVideo(true)}>
                Watch Video
            </button>

            {quiz && (
                <button className="btn" onClick={() => setShowQuiz(true)} style={{ marginLeft: '10px' }}>
                    Take Quiz
                </button>
            )}

            {showVideo && (
                <VideoModal onClose={() => setShowVideo(false)} videoUrl={course.videoUrl} />
            )}

            {showQuiz && quiz && (
                <QuizModal quizData={quiz} onClose={() => setShowQuiz(false)} />
            )}
        </div>
    );
};

export default CourseDetail;

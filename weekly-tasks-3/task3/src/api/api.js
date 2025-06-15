import axios from 'axios';

export const getCourses = () => axios.get('/json/courses.json');

export const getCourseById = (id) =>
    axios.get('/json/courses.json').then((res) => {
        const course = res.data.find((c) => c.id === id);
        return { data: course };
    });

export const getQuizByCourseId = (courseId) =>
    axios.get('/json/quizzes.json').then((res) => {
        const quiz = res.data.find((q) => q.courseId === courseId);
        return quiz;
    });

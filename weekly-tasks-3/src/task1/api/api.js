import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUserPosts = (username) => {
    return api.get('/posts');
};

export const getPostBySlug = async (slug) => {
    const res = await api.get('/posts');
    const matched = res.data.find(post =>
        post.title.toLowerCase().split(' ').join('-') === slug
    );
    return { data: matched };
};

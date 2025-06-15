import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../api/api';
import withLoader from '../hocs/withLoader';

const Post = ({ post }) => {
    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Link to={`/${post.userId}/posts`} className="back-link">← Back to Posts</Link>
        </div>
    );
};

const WrappedPost = withLoader(Post);

const PostDetail = () => {
    const { slug } = useParams(); 
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPostBySlug(slug)
            .then((res) => {
                setPost(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [slug]);

    return (
        <div className="container">
            <WrappedPost post={post} isLoading={isLoading} error={error} />
        </div>
    );
};

export default PostDetail;

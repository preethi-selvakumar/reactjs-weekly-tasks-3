import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserPosts } from '../api/api';
import withLoader from '../hocs/withLoader';
import EditPostModal from "../models/EditPostModel";
import DeletePostModal from "../models/DeletePostModel";

const PostList = ({ posts, onEdit, onDelete }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post-card">
                    <Link to={`/post/${post.slug}`} className="post-title">
                        {post.title}
                    </Link>
                    <div className="post-actions">
                        <button onClick={() => onEdit(post)}>Edit</button>
                        <button onClick={() => onDelete(post.id)} className="danger">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const WrappedPostList = withLoader(PostList);

const UserPosts = () => {
    const { username } = useParams();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingPost, setEditingPost] = useState(null);
    const [deletingPostId, setDeletingPostId] = useState(null);

    useEffect(() => {
        getUserPosts(username)
            .then((res) => {
                // Generate slug from title
                const postsWithSlugs = res.data.slice(0, 10).map(post => ({
                    ...post,
                    slug: post.title.toLowerCase().split(' ').join('-')
                }));

                setPosts(postsWithSlugs);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [username]);


    const handleDeleteConfirm = (id) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    };

    return (
        <div className="container">
            <h2>{username}'s Posts</h2>
            <WrappedPostList
                posts={posts}
                isLoading={isLoading}
                error={error}
                onEdit={(post) => setEditingPost(post)}
                onDelete={(id) => setDeletingPostId(id)}
            />

            {editingPost && (
                <EditPostModal
                    post={editingPost}
                    onClose={() => setEditingPost(null)}
                />
            )}

            {deletingPostId && (
                <DeletePostModal
                    postId={deletingPostId}
                    onClose={() => setDeletingPostId(null)}
                    onDeleteConfirm={handleDeleteConfirm}
                />
            )}
        </div>
    );
};

export default UserPosts;

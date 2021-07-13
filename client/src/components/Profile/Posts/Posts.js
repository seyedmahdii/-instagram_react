import React from "react";
import "./Posts.css";
import Post from "./Post/Post";

import { useSelector } from "react-redux";
import { useGlobalContext } from "../../../Context";

function Posts() {
    const { posts } = useSelector((state) => state.posts);
    const { setPostsCount } = useGlobalContext();
    setPostsCount(posts.length);
    console.log(posts);

    return (
        <div className="posts">
            <div className="container posts-container">
                {posts.map((post) => {
                    return <Post post={post} key={post._id} />;
                })}
            </div>
        </div>
    );
}

export default Posts;

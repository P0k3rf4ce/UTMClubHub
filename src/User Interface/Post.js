import React from 'react';
import parse from 'html-react-parser';
import { useState } from "react";
import './Post.css';

export function PostComments() {
    return (
        <div></div>
    );
}

function Icon(icon_name, undertext) {
    
}

const Post =  ({post_data}) => {
    const [commentsHidden, setCommentsHidden] = useState(true);

    return (
        <div className="post-box">
            <div className='post-user-handle-row'>
            <div className='post-username'>{post_data.username}</div>
            <div className='post-handle'> &nbsp;&#183; {post_data.handle}</div>
            </div>
            <p>{parse(post_data.content)}</p>
        </div>
    );
};

export default Post;
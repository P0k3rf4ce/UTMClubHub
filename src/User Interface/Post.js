import React from 'react';
import parse from 'html-react-parser';
import { useState } from "react";
import './Post.css';
import { FaComment, FaHeart, FaPaperPlane } from 'react-icons/fa';

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
                <div className='button-row'>
                <div className='button-container'>
                <FaHeart className='icon-button' />
                <span class="tooltip">Like this post</span>
                </div>
                <div className='button-container'>
                <FaComment className='icon-button' />
                <span class="tooltip">Comment on this post</span>
                </div>
                <div className='button-container'>
                <FaPaperPlane className='icon-button' />
                <span class="tooltip">Share this post</span>
                </div>
                </div>
            </div>
            
    );
};

export default Post;
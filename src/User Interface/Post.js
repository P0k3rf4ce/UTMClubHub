import React from 'react';
import parse from 'html-react-parser';
import { useState } from "react";

export function PostComments() {
    return (
        <div></div>
    );
}

const Post =  ({post_data}) => {
    const [commentsHidden, setCommentsHidden] = useState(true);

    return (
        <div>
            <h1>{post_data.username}, {post_data.handle}</h1>
            <p>{parse(post_data.content)}</p>
        </div>
    );
};

export default Post;
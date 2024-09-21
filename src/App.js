import { useState } from "react";
import Navbar from "./User Interface/Navbar.js";
import Post from "./User Interface/Post.js";
import postData from './User Interface/test/fake_posts.json';


export default function App() {
  return (
    <div className="row">
      <div className="post-section">
        {postData.map((post) => (<Post key={post.id} post_data={post}/>))}
      </div>
    </div>
  );
}
/**/
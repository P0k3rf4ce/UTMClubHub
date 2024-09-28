import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import Calendar from "./User Interface/Calendar";
import Post from "./User Interface/Post";
import postData from './User Interface/test/fake_posts.json';

export default function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Calendar />
    </div>
    <div className="row">
      <div className="post-section">
        {postData.map((post) => (<Post key={post.id} post_data={post}/>))}
      </div>
    </div>
    </div>
  );
}
/**/
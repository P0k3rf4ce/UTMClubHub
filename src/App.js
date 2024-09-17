import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import Post from "./User Interface/Post";
import postData from './User Interface/test/fake_posts.json';


export default function App() {
  return (
    <div className="row">
      <Navbar />
      <div>
        {postData.map((post) => (<Post key={post.id} post_data={post}/>))}
      </div>
    </div>
  );
}
/**/
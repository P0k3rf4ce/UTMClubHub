import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import Post from "./User Interface/Post";
import postData from './User Interface/test/fake_posts.json';

export default function App() {
  const [isPostVisible, setIsPostVisible] = useState(true);

  // Function to toggle visibility of posts
  const togglePosts = () => {
    setIsPostVisible(!isPostVisible);
  };

  return (
    <div>
      <div>
        <Navbar togglePosts={togglePosts} />
      </div>
      <div className="row">
        <div className="post-section">
          {isPostVisible && postData.map((post) => (<Post key={post.id} post_data={post}/>))}
        </div>
      </div>
    </div>
  )};
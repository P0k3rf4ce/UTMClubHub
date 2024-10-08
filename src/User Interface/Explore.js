import react from "react";
import Post from "./Post";
import postData from './test/fake_posts.json';
import Navbar from "./Navbar";
import "./Explore.css"

export default function Explore(){
  return (
    <div>
        <Navbar></Navbar>
      <div className='container'>
        {postData.map((post) => (<Post key={post.id} post_data={post}/>))}
      </div>
    </div>
  );
}

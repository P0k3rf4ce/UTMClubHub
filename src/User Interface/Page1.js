import react from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import postData from './test/fake_posts.json';

export default function Page1(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="row">
                <div className="post-section">
                    <p>My name is Nate!</p>
                </div>
            </div>
        </div>
    )
}
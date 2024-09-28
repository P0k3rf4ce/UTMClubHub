import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import Post from "./User Interface/Post";
import postData from './User Interface/test/fake_posts.json';
import Search from "./User Interface/Search";

export default function App() {
  // Use the correct syntax for declaring and using state
  const [isPostVisible, setIsPostVisible] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Initially, posts are shown, search is hidden

  // Function to hide posts and show search
  const post2search = () => {
    setIsPostVisible(false);
    setIsSearchVisible(true);
  };

  // Function to hide search and show posts
  const search2post = () => {
    setIsSearchVisible(false);
    setIsPostVisible(true);
  };

  return (
    <div>
      <div>
        <Navbar post2search={post2search} search2post={search2post} />
      </div>
      <div className="row">
        <div className="post-section">
          {/* Conditional rendering of posts */}
          {isPostVisible && postData.map((post) => (<Post key={post.id} post_data={post} />))}
        </div>
      </div>
      <div>
        {/* Conditional rendering of search */}
        {isSearchVisible && <Search />}
      </div>
    </div>
  );
}

import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import Post from "./User Interface/Post";
import postData from './User Interface/test/fake_posts.json';
import Search from "./User Interface/Search";

// New imports
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./User Interface/Home";
import SearchPage from "./User Interface/SearchPage";
import Explore from "./User Interface/Explore"

export default function App() {
  // Use the correct syntax for declaring and using state
  // const [isPostVisible, setIsPostVisible] = useState(true);
  // const [isSearchVisible, setIsSearchVisible] = useState(false); // Initially, posts are shown, search is hidden
  /*
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
          {isPostVisible && postData.map((post) => (<Post key={post.id} post_data={post} />))}
        </div>
      </div>
      <div>

        {isSearchVisible && <Search />}
      </div>
    </div>
  );
  */
  // Previous version of App ^

  return(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Search' element={<SearchPage></SearchPage>}></Route>
        <Route path='/Explore' element={<Explore></Explore>}></Route>
      </Routes>
    </HashRouter>
  )
}

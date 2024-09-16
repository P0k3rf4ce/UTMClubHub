import { useState } from "react";
import Navbar from "./User Interface/Navbar";
import AllPosts from "./User Interface/Post";


export default function App() {
  return (
    <div className="row">
      <Navbar />
      <AllPosts/>
    </div>
  );
}
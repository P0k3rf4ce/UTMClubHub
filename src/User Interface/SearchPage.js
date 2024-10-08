import react from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Search from "./Search";
import './SearchPage.css'

export default function SearchPage(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="bdef">
                <Search/>
            </div>
        </div>
    )
}
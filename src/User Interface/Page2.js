import react from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Search from "./Search";

export default function Page1(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Search/>
            </div>
        </div>
    )
}
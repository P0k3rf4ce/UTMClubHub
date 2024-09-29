import react from "react";
import Navbar from "./Navbar";
import "./Home.css";


export default function Home(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="mainsection">
                    <h1 className="mainheader">Welcome to the UTM Club Hub!</h1>
                    <p>This is the best place to see all events on campus, meet new people and try new things!</p>
                    <p>What are you waiting for? Check out the Calendar page to see what's going on today on campus!</p>
                    <h2 className="quickstart">Quick Start Guide</h2>
                    <h3>Home page</h3>
                    <p>This is the home page. If you ever want to navigate back to this page, click on the Home Icon.</p>
                    <p>The home page serves a few main purposes:</p>
                    <ul>
                        <li>First, it provides a place for your feedback right in the site. Please let us know if there is any features or changes that you want added</li>
                        <li>Secondly, it provides a place for us to post our developments and changes to the site.</li>
                        <li>This page also will highlight a cool event, and shine a spotlight on a different club each day.</li>
                        <li>This page also contains things like this guide to help make this site as easy and accessible as possible.</li>
                    </ul>
                    <h3>Explore Page</h3>
                    <p>The explore page is where you'll find all the posts.</p>
                    <p>Be sure to check it out to see what everyone has been up to!</p>
                    <p>Clubs will always post cool stuff they're doing, so be sure to check it out.</p>
                    <p>You can get to the explore page by clicking the Explore icon (A compass).</p>
                    <p>The explore page is also where you're going to be interacting with the club posts.</p>
                    <p>Be sure to show some support by liking, and commenting under the posts!</p>
                    <h3>Calendar Page</h3>
                    <p>Click on the little Calendar Icon to go to the Calendar Page.</p>
                    <p>The Calendar Page has 2 modes!</p>
                    <p>Use the My Calendar to see which events you've saved and when they are happening!</p>
                    <p>The General Calendar shows all the events that are happening in the next while.</p>
                    <p>You can save event dates from any post and they will show up in 'My Calendar'</p>
                    <p>Calendar also allows you to manage your events.</p>
                    <h3>Search Page</h3>
                    <p>Click on the hourglass icon to get to the Search Page.</p>
                    <p>This page allows you to search for events, clubs and people by keyword.</p>
                    <p>Use it to find your favorite clubs and events, even if you forgot to save it first time around in your explore page!</p>
                    <h3>Settings Page</h3>
                    <p>Click on the gear icon to go to the Settings Page.</p>
                    <p>The settings page is the place to go to change the look and feel of the site.</p>
                    <p>Feel free to try different color and accessiblility settings to make this site work better for you!</p>
                    <h3>Account Page</h3>
                    <p>Click on the person icon to go to the Account Page.</p>
                    <p>Here you can logout of the app, or manage any of your account permissions.</p>
            </div>
        </div>
    )
}
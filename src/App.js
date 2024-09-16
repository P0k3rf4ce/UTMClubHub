import { useState } from "react";
import Navbar from "./User Interface/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer class="margin-t-80">
      <div class="container">
        <div class="br-footer-detail">
          <div class="br-copy">
              Copyright © <a class="site-name" href="index.html">UTM CLUB HUB</a> all rights reserved. Powered by<a href="https://www.digitalocean.com/"> Digital Ocean. </a>
          </div>
          <div class="br-social">
            <ul>
              <li><a href="LINK">
                <i class="instagram" aria-hidden="true"></i>
              </a></li>
              <li><a href="LINNK">
                <i class="linkedin" aria-hidden="true"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
import React from "react";
import { Link } from "react-router-dom";

function WelcomeNavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/project">Projects</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Pricing</a> */}
      </li>
      <li class="nav-item">
        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </li>
    </ul>
  </div>
</nav>
    );
}

export default WelcomeNavBar
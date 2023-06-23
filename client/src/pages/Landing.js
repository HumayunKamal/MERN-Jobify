import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            I'm baby copper mug locavore tumeric asymmetrical, lo-fi umami
            authentic hella pour-over gluten-free distillery yes plz. Viral
            before they sold out messenger bag crucifix slow-carb distillery
            iPhone vaporware. Meggings 3 wolf moon drinking vinegar, austin
            selfies 8-bit flexitarian readymade shabby chic palo santo seitan.
          </p>
          <Link to="/register">
            {" "}
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

import "./App.css";
import { FaAngleRight } from "react-icons/fa";
import imageOne from "../src/Assets/ImageOne.jpeg";
import { useState } from "react";
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div
        className="menuContainer"
        onClick={() => {
          handleShowNavbar();
        }}
      >
        <div className="menulist"> </div>
        <div className="menulist"> </div>
        <div className="menulist"> </div>
      </div>
      <ul className={showNavbar ? "showNavbar" : ""}>
        <li> Home</li>
        <li> Portfolio </li>
        <li> Works </li>
        <li>
          {" "}
          Contact
          <div class="dropDownContainer">
            <div class="content"> Phone </div>
            <div class="content emailContainer">
              {" "}
              Email
              <div>
                {" "}
                <FaAngleRight />{" "}
              </div>
              <div class="emailDropDown"> kennataddese6@gmail.com </div>
            </div>
            <div class="content"> Address </div>
          </div>
        </li>
        <li>
          {" "}
          <> About </>{" "}
        </li>
        <li className="HireMeright">
          {" "}
          <> Hire Me </>{" "}
        </li>
      </ul>
      <h6>.</h6>
      <div className="gallery">
        <div className="descriptionContainer">
          <h1 className="IntroductionName">Hi. This is kenna.</h1>
          <h1 className="IntroductionCareer">I am a software developer.</h1>
          <button className="learnMoreButton">Learn More</button>
        </div>
      </div>
      <div className="gallery">
        <img src={imageOne} className="LandingPageImage" />
      </div>
    </>
  );
}

export default App;

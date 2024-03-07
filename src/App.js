import "./App.css";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredout, setHoveredout] = useState(false);
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
      <div className="LandingpageFirstContainer">
        <div className="description col-s-6">
          {" "}
          <div className="desciptionholder">
            <h1 className="desciptiontext">Hi, My name is Kenna.</h1>
            <h2 className="desciptiontext">I am a Frontend Developer.</h2>
            <button
              className={hoveredout ? "learnMoreButtonOut" : "learnMoreButton"}
              onMouseOut={() => {
                setHoveredout(true);
              }}
              onMouseOver={() => {
                setHoveredout(false);
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="imageContainer col-s-6"> </div>
      </div>
    </>
  );
}

export default App;

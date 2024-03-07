import "./App.css";
import { FaAngleRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredout, setHoveredout] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const cardRef = useRef();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const checkVisibility = () => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const cardRect = cardElement.getBoundingClientRect();
    const cardTop = cardRect.top;
    const cardBottom = cardRect.bottom;
    const viewportHeight = window.innerHeight;

    // Check if the top of the card is below the top of the viewport
    // and if the bottom of the card is above the bottom of the viewport
    console.log(cardTop, cardBottom, viewportHeight);
    console.log(visible);
    console.log(cardTop < viewportHeight && cardBottom >= 0);
    setIsVisible(cardTop < viewportHeight && cardBottom >= 0);
  };
  useEffect(() => {
    // Check visibility when component mounts
    checkVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", checkVisibility);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []); // Empty dependency array to run effect only once on mount

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
      <div className="LandingpageFirstContainer">
        <div
          className={
            !visible
              ? "secondImageContainerInVisble col-s-6"
              : "secondImageContainer col-s-6"
          }
          ref={cardRef}
        ></div>
      </div>
    </>
  );
}

export default App;

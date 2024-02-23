import "./App.css";
import { FaAngleRight } from "react-icons/fa";
import imageOne from "../src/Assets/ImageOne.jpeg";
function App() {
  return (
    <>
      <ul>
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
      <h1> Hello</h1>
      <div className="gallery">
        <div className="descriptionContainer"> Hello</div>
      </div>
      <div className="gallery">
        <img src={imageOne} className="LandingPageImage" />
      </div>
    </>
  );
}

export default App;

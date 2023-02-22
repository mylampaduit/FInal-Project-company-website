// import "./Services.css";
import backyard from "../../img/backyard202.jpg";
import pavers from "../../img/pavers.jpg";
import patio1 from "../../img/patio1.jpg";
import turf from "../../img/truf.jpg";
import pool from "../../img/pool2.jpg";
import concret from "../../img/2.jpg";
import BookNow from "../../Components/Booknow/BookNow";
import { Link } from "react-router-dom";

const Services = () => {
  // function handleClick() {
  //   window.location = "/backyard";
  // }
  return (
    <div>
      <div className="content"></div>
      <div class="atv removePadding">
        <h1>Services We Offer</h1>
      </div>
      <div class="content" id="bgDark">
        <div class="portContainer">
          <div class="p1">
            <Link to="/services/backyard">
              <div
                class="imgSection"
                //  onclick={handleClick}
              >
                <div class="overlay">
                  <h1>Backyard Transformations</h1>
                </div>
                <img src={backyard} alt="" />
              </div>
            </Link>

            <Link to="/services/patio">
              <div
                class="imgSection"
                // onclick='document.location.href="./patio.php"'
              >
                <div class="overlay">
                  {" "}
                  <h1>PATIO</h1>
                </div>
                <img src={patio1} alt="" />
              </div>
            </Link>
            <Link to="/services/concrete">
              <div
                class="imgSection"
                // onclick='document.location.href="./concrete.php"'
              >
                <div class="overlay">
                  {" "}
                  <h1>Concrete</h1>
                </div>
                <img src={concret} alt="" />
              </div>
            </Link>
          </div>

          <div class="p1">
            <Link to="/services/pavers">
              <div
                class="imgSection"
                // onclick='document.location.href="./pavers.php"'
              >
                <div class="overlay">
                  {" "}
                  <h1>PAVERS</h1>
                </div>
                <img src={pavers} alt="" />
              </div>
            </Link>
            <Link to="/services/turf">
              <div
                class="imgSection"
                // onclick='document.location.href="./truf.php"'
              >
                <div class="overlay">
                  <h1>TURF</h1>
                </div>
                <img src={turf} alt="" />
              </div>
            </Link>

            <Link to="/services/pool">
              <div
                class="imgSection"
                // onclick='document.location.href="./pool.php"'
              >
                <div class="overlay">
                  <h1>POOL</h1>
                </div>
                <img src={pool} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <BookNow />
    </div>
  );
};

export default Services;

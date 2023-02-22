// import "./Banner.css";
import clip from "../../img/new.mp4";
import Leading from "../Leading/Leading";
import Map from "../Map/Map";
import Accomplish from "../AccomplishSection/Accomplish";
import abstract from "../../img/abstract.png";
import prj from "../../img/prj.mp4";
import BuidlingCare from "../Building/BuidlingCare";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      {/* <div className="videoContainer">
        <video id="bannervideo" autoPlay loop>
          <source src={clip} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div> */}
      <div class="slider">
        <div class="slide">
          <div class="topper">
            <Link to="/services/backyard" class="link1">
              BACKYARD
              <img src={abstract} alt="" />
            </Link>
            <Link to="/services/concrete" class="link1">
              CONCRETE
              <img src={abstract} alt="" />
            </Link>
            <Link to="/services/patio" class="link1">
              PATIO
              <img src={abstract} alt="" />
            </Link>
          </div>
          <div class="bottom">
            <Link to="/services/pavers" class="link1">
              PAVERS
              <img src={abstract} alt="" />
            </Link>
            <Link to="/services/truf" class="link1">
              TURF
              <img src={abstract} alt="" />
            </Link>
            <Link to="/services/pool" class="link1">
              POOL/SPA
              <img src={abstract} alt="" />
            </Link>
          </div>
        </div>

        <div class="texter">
          <button class="btn book BookNow">BOOK NOW</button>
          <h1 class="book2">Free Consulation</h1>
          <video autoPlay loop id="myVideo">
            <source src={prj} type="video/mp4" />
          </video>
        </div>
      </div>

      <Leading />
      <BuidlingCare />

      <div
        className="homepagevideo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video controls autoPlay loop className="homepagevideo">
          <source src={clip} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Map />
      <Accomplish />
    </>
  );
};

export default Banner;

// import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiTwotoneMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import logo from "../../img/Blue-on-Logo.png";

const Footer = () => {
  return (
    <>
      {/* <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <img src={logo} alt="website logo here" />
          </h3>

          <p class="footer-links">
            <ul className="navbar-nav1 mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Virtual Tour
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </li>
            </ul>
          </p>
        </div>

        <div class="footer-center">
          <div className="aboutIcons">
            <HiLocationMarker className="me-2" />
            <p>6700 Fallbrook Ave Ste #133 Los Angeles, CA 91307</p>
          </div>

          <div className="aboutIcons">
            <BsFillTelephoneFill className="me-2" />
            <p> 1800-505-5770</p>
          </div>

          <div className="aboutIcons">
            <AiTwotoneMail className="me-2" />
            <p>
              <a href="mailto:support@waytogobuilders.com">
                support@waytogobuilders.com
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            We've Accomplished A Lot, But We Still Have A Long Way To Go....
          </p>

          <div class="footer-icons">
            <a href="facebook.com">
              <AiFillFacebook />
            </a>
            <a href="twitter.com">
              <AiFillTwitterSquare />
            </a>
            <a href="instagram.com">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="copyright text-center">
          <b className="CcopyRight">©</b>
          2023 All Rights Reserved. Way To Go Builders, Inc.
        </div>
      </footer> */}

      {/* footer builtin */}
      {/* <div className="content"></div> */}
      <div class="prj footer">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <div class="Col">
          <ul>
            <li>6700 Fallbrook Ave Ste #133 Los Angeles, CA 91307</li>

            <li> 1 800-505-5770</li>
            <li> support@waytogobuilders.com</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <span>SITE DESIGN BY--Myla M. Paduit</span>
          <span>
            {" "}
            &copy;2023 Way To Go Builders, Inc., All Rights Reserved. Back to
            top
          </span>
          <span>#WAYTOGOBUILDERS</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

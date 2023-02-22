import { useContext, useState } from "react";
import logo from "../../img/Blue-on-Logo.png";
import orignal from "../../img/orignal.png";
import menu from "../../img/menu.png";
import AuthContext from "../../context/Authcontext";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  const [isOpen, setIsopen] = useState(false);

  const [navbarr, setNavbar] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const ToggleNav = () => {
    navbarr === true ? setNavbar(false) : setNavbar(true);
  };
  return (
    <>
      <div className="nav2">
        <div className="men">
          <img src={menu} alt="" onClick={ToggleNav} />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul id="none" className={`none ${navbarr ? "menShow" : ""}`}>
          <li>
            <a
              //  className="active"
              href="/"
            >
              HOME
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <a href="/dashbored">Dashbored</a>
            </li>
          )}
          <li>
            <a href="/aboutus">ABOUT&nbsp;US</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/tours">VIRTUAL&nbsp;TOUR</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
        </ul>
        <div className="ham hamburger-menu" onClick={ToggleSidebar}>
          <div className={`bar-top ${isOpen ? "change1" : ""}"}`}></div>
          <div className={`bar-top ${isOpen ? "change2" : ""}"}`}></div>
          <div className={`bar-top ${isOpen ? "change3" : ""}"}`}></div>
        </div>
      </div>
      <div id="contact">
        <div className="head">
          <img id="close" src={orignal} alt="" />
          <h1>REQUEST A VISIT</h1>
        </div>
        <form action="data.php" method="post">
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="number"
            name="PhoneNumber"
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            required
          />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <input type="submit" className="btns" value="send" />
        </form>
      </div>
      {isOpen ? (
        <div className={`sidebar ${isOpen ? "show" : ""} `}>
          <img src={orignal} alt="Way to go builders" />
          <div className="insider">
            <p>
              <b>Address</b>
            </p>
            <p>6700 Fallbrook Ave Ste #133 Los Angeles, CA 91307</p>
            <p>
              <b>Phone</b>
            </p>
            <p> 1 800-505-5770</p>
            <p>
              <b>Email</b>
            </p>
            <p>support@waytogobuilders.com</p>
            <p>office@waytogobuilders.com</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav(props) {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <nav className={`Nav ${show && "nav__black"}`}>
      <ul className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={"150px"}
          alt="netflix-logo"
        />
        {props.loggedIn ? (
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile-avatar"
            width={"50px"}
          />
        ) : (
          <button onClick={props.btnOnClick} className="nav__button">
            Sign In
          </button>
        )}
      </ul>
    </nav>
  );
}

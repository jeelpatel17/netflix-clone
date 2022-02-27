import { useState } from "react";
import Nav from "../Nav";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

export default function Login() {
  const [letsSignIn, setLetsSignIn] = useState(false);
  function signIn() {
    setLetsSignIn(true);
    alert("signed in!");
  }
  function handleChange() {
    signIn();
  }
  return (
    <div className="login">
      {letsSignIn ? (
        <SignUpScreen />
      ) : (
        <>
          <Nav loggedIn={false} btnOnClick={handleChange} />
          <div className="login__contents">
            <h1 className="login__title">
              Unlimited movies, TV
              <br /> shows and more.
            </h1>
            <h2 className="login__subtitle">Watch anywhere. Cancel anytime.</h2>
            <h4 className="login__cta">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div>
              <form onSubmit={handleChange} className="login__input">
                <input type="text" placeholder="Email address" required />
                <button>Get Started &nbsp;&rsaquo;&nbsp;</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

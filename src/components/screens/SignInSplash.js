import { useState } from "react";
import Nav from "../Nav";
import "./SignInSplash.css";
import SignInScreen from "./SignInScreen";

export default function SignInSplash() {
  const [letsSignIn, setLetsSignIn] = useState(false);
  function signIn() {
    setLetsSignIn(true);
  }
  function handleChange() {
    signIn();
  }
  return (
    <div className="signIn">
      {letsSignIn ? (
        <SignInScreen />
      ) : (
        <>
          <Nav loggedIn={false} btnOnClick={handleChange} />
          <div className="signIn__contents">
            <h1 className="signIn__title">
              Unlimited movies, TV
              <br /> shows and more.
            </h1>
            <h2 className="signIn__subtitle">
              Watch anywhere. Cancel anytime.
            </h2>
            <h4 className="signIn__cta">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div>
              <form onSubmit={handleChange} className="signIn__input">
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

import { useRef, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import "./SignInScreen.css";

export default function SignInScreen() {
  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((err) => setError(err.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((err) => setError(err.message));
  };
  return (
    <div className="signInOriginal">
      <nav className="Nav">
        <div className="nav__contents">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={"150px"}
            alt="netflix-logo"
          />
        </div>
      </nav>
      <div className="signInOriginal__formContainer">
        <form onSubmit={signIn} className="signInOriginal__form">
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email" required />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          {error && <p>{error}</p>}
          <button type="submit">Sign In</button>
          <h4>
            New to Netflix? <span onClick={register}>Sign Up now.</span>
          </h4>
        </form>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import "./SignUpScreen.css";

export default function SignUpScreen() {
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
  };
  return (
    <div className="signUp">
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
      <div className="signUp">
        <form onSubmit={signIn} className="signUp__form">
          <h1>Sign Up</h1>
          <input ref={emailRef} type="email" placeholder="Email" required />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          {error && <p>{error}</p>}
          <button type="submit">Sign Up</button>
          <h4>
            New to Netflix? <span onClick={register}>Sign Up now.</span>
          </h4>
        </form>
      </div>
    </div>
  );
}

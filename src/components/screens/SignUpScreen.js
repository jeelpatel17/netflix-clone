export default function SignUpScreen() {
  return (
    <div className="SignUpScreen">
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
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

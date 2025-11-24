import { Link } from "react-router-dom";

function TempComp() {
  return (
    <>
      <Link to="/about" className="login">
        <span className="link">About us</span>
      </Link>
      <a
        href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
        className="login">
        <span className="link">Login</span>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
        className="sign-up">
        <span className="link"> Sign up</span>
      </a>
    </>
  );
}

export default TempComp;

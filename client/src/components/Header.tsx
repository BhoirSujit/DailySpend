import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  return (
    <header className="p-4 px-8">
      <nav className="flex justify-between items-center font-semibold">
        <Logo />
        <ul className="flex gap-6">
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-link">
              Admin
            </Link>
          </li>
        </ul>

        <div className="auth flex gap-6">
          {token ? (
            <>
              <button onClick={() => logout()}>logout</button>
              <Button onClick={() => navigate("/dashbord")}>Dashbord</Button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/register")}>Sign up</button>
              <Button onClick={() => navigate("/login")}>Log in</Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

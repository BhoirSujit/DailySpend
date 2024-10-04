
import { Link, Navigate, useNavigate } from "react-router-dom";

import Button from "./Button";
import Logo from "./Logo";
import { Component } from "react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="p-4 px-8">
      <nav className="flex justify-between items-center font-semibold">
        <Logo/>
        <ul className="flex gap-6">
          <li>
            <Link to={'/'} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={'/'}  className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={'/'}  className="nav-link">
            Admin</Link>
          </li>
        </ul>

        <div className="auth flex gap-6">
            <button onClick={() => navigate('/register')} >Sign up</button>
            <Button onClick={() => navigate('/login')}>
              Log in
            </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

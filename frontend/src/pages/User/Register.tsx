import React, { useRef } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VconfirmPassword, Vname, Vpassword } from "../../utils/validate";
import { registerUser } from "../../api/AuthApi";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [confpass, setConfPass] = useState<string>("");
  const confpassRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    //validate

    if (!Vname(name)) {
      return "envalid name";
    }

    if (!Vpassword(pass)) {
      return "password validate";
    }

    if (!VconfirmPassword(pass, confpass)) {
      confpassRef.current?.setCustomValidity("password doesnt match");
      return;
    } else {
      confpassRef.current?.setCustomValidity("");
    }

    registerUser({
      name: name,
      email: email,
      password: pass,
    });
  };

  return (
    <div>
      <div className="card mx-72 place-content-center h-[100vh]  ">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center  gap-3"
        >
          <div className="text-center">
            <Logo />
          </div>

          <h2 className="font-bold  text-xl text-center mt-2 mb-6">
            Create new Account
          </h2>
          <div className="form-control flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded-md p-1 px-2 mt-1 focus:outline-indigo-100"
              name="name"
              id="name"
              type="text"
              placeholder="your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-md p-1 px-2 mt-1 focus:outline-indigo-100"
              name="email"
              id="email"
              type="email"
              required
              placeholder="emaple@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>{" "}
            </div>

            <input
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="password"
              id="password"
              type="password"
              required
              placeholder="*********"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="confirm-password">Confirm Password</label>{" "}
            </div>

            <input
              ref={confpassRef}
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="confirm-password"
              id="confirm-password"
              type="password"
              required
              placeholder="*********"
              onChange={(e) => setConfPass(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full  bg-indigo-600 px-4 py-1 rounded-md text-white"
          >
            Register
          </button>

          <h6 className="inline-block">
            Already have an account?{" "}
            <span className=" font-semibold text-indigo-600">
              <Link to={"/login"}> Login</Link>
            </span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Register;

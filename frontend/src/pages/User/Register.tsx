import React, { FormEvent, useRef } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateRegisterForm } from "../../utils/validate";
import { registerUser } from "../../api/AuthApi";

const Register = () => {
  const initvalue = { name: "", email: "", pass: "", confpass: "" };
  const [formData, setFormData] = useState(initvalue);
  const [formError, setFormErr] = useState(initvalue);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    //validate
    let vali = validateRegisterForm(formData);
    if (Object.keys(vali).length > 0) {
      setFormErr(vali);
    } else {
      registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.pass,
      });
    }
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
              onChange={handleChanges}
            />
            <p className="text-red-600">{formError.name}</p>
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
              onChange={handleChanges}
            />
            <p className="text-red-600">{formError.email}</p>
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
            </div>

            <input
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="pass"
              id="password"
              type="password"
              required
              placeholder="*********"
              onChange={handleChanges}
            />
            <p className="text-red-600">{formError.pass}</p>
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="confirm-password">Confirm Password</label>{" "}
            </div>

            <input
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="confpass"
              id="confirm-password"
              type="password"
              required
              placeholder="*********"
              onChange={handleChanges}
            />
            <p className="text-red-600">{formError.confpass}</p>
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

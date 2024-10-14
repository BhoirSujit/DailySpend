import React, { useState, useContext } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/AuthApi";

import AuthContext from "../../context/AuthContext";

const Login = () => {
  const initVal = {email : '', pass : ''};
  const {auth, setAuth} = useContext(AuthContext)
  const [formData, setFormData] = useState(initVal);
  console.log(auth)
  const handleChanges = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const  handleSubmit = async (e) => {
    
    e.preventDefault();
    e.stopPropagation();


    //login
    const d = await loginUser({email: formData.email, password: formData.pass});
    console.log(d);
    setAuth({token : d.token});
  }
 

  return (
    <div>
      <div className="card mx-72 place-content-center h-[100vh]  ">
        <form onSubmit={handleSubmit} className=" flex flex-col justify-center  gap-3" action="">
          <div className="text-center">
            <Logo />
          </div>

          <h2 className="font-bold  text-xl text-center mt-2 mb-6">
            Sign in to your Account
          </h2>

          <div className="form-control flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-md p-1 mt-1 focus:outline-indigo-100"
              name="email"
              id="email"
              type="email"
              placeholder="emaple@gmail.com"
              onChange={handleChanges}
            />
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="email">Password</label>{" "}
              <span className="font-semibold  text-indigo-600">
                <Link to={"/forget-passowrd"}>Forgot password</Link>
              </span>
            </div>

            <input
              className="border rounded-md p-1 mt-1  focus:outline-indigo-100"
              name="pass"
              id="password"
              type="password"
              placeholder="*********"
              onChange={handleChanges}
            />
          </div>
          <button type="submit" className="w-full  bg-indigo-600 px-4 py-1 rounded-md text-white">
            Login
          </button>

          <h6 className="inline-block">
            Don't have account?{" "}
            <span className=" font-semibold text-indigo-600">
              <Link to={"/register"}> Create One</Link>
            </span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;

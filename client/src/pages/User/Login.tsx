import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth.api";
import useAuth from "../../hooks/useAuth";


interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<LoginData>({ email: "", password: "" });
  const {setToken} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login(data);
      if (res && res.token) {
        setToken(res.token)
        navigate("/dashbord")
      }
      
    } catch (error) {
      alert(error);
    }

  };

  return (
    <div>
      <div className="card mx-72 place-content-center h-[100vh]">
        <form className="flex flex-col justify-center gap-3" onSubmit={handleLogin}>
          <div className="text-center">
            <Logo />
          </div>

          <h2 className="font-bold text-xl text-center mt-2 mb-6">
            Sign in to your Account
          </h2>

          <div className="form-control flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-md p-1 mt-1 focus:outline-indigo-100"
              name="email"
              id="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-control flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-md p-1 mt-1 focus:outline-indigo-100"
              name="password"
              id="password"
              type="password"
              placeholder="*********"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 px-4 py-1 rounded-md text-white">
            Login
          </button>

          <h6>
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-indigo-600">
              Create One
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;

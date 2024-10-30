import Logo from "../../components/Logo";
import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/auth.api";
import useAuth from "../../hooks/useAuth";

interface RegistrationDataBody  {
  name: string,
  email: string,
  password: string,
  confirm_password? : string,
}

const Register = () => {
  const {setToken} = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState<RegistrationDataBody>({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [formError, setFormError] = useState<RegistrationDataBody>({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signup(data!);
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
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
              onChange={(e) => setData({...data, email: e.target.value})}
            />
            <p className="text-red-600">{formError.email}</p>
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="password">Password</label>
            </div>

            <input
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="password"
              id="password"
              type="password"
              required
              placeholder="*********"
              onChange={(e) => setData({...data, password : e.target.value})}
            />
            <p className="text-red-600">{formError.password}</p>
          </div>
          <div className="form-control flex flex-col ">
            <div className="flex justify-between">
              <label htmlFor="confirm-password">Confirm Password</label>{" "}
            </div>

            <input
              className="border rounded-md p-1 px-2 mt-1  focus:outline-indigo-100"
              name="conformpassword"
              id="confirm-password"
              type="password"
              required
              placeholder="*********"
              onChange={(e) => setData({...data, password_password : e.target.value})}
            />
            <p className="text-red-600">{formError.conform_password}</p>
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

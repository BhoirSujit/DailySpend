import React from "react";
import Home from "./pages/Home";
import Register from "./pages/User/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/User/Login";
import Dashbord from "./pages/User/Dashbord";
import AddExpenses from "./pages/User/AddExpenses";
import ManageExpenses from "./pages/User/MamageExpenses";
import Profile from "./pages/User/Profile";
import UserLayout from "./Layout/UserLayout";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Home />} path="/" index />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<UserLayout />}>
              <Route element={<Dashbord />} path="/dashbord" />
              <Route element={<AddExpenses />} path="/add-expenses" />
              <Route element={<ManageExpenses />} path="/manage-expenses" />
              <Route element={<Profile />} path="/profile" />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

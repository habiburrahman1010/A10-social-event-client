import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    signIn(email, password)
      .then(() => navigate("/"))
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => navigate("/"))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl m-auto my-8">

      
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h2 className="font-bold text-2xl text-center py-4">Welcome to login</h2>
          <label>Email</label>
          <input
            type="email"
            className="input input-bordered"
            name="email"
            placeholder="Email"
          />

          <label>Password</label>
          <input
            type="password"
            className="input input-bordered"
            name="password"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4 w-full ">Login</button>
        </form>


        <p className="mt-2 ">
          <Link
            to={`/auth/forgot-password?email=${encodeURIComponent(
              document.querySelector("input[name='email']")?.value || ""
            )}`}
            className="text-blue-400 underline" >
            Forgot Password?
          </Link>
        </p>

        <button onClick={handleGoogleLogin} className="btn mt-3 w-full">
          Continue with Google
        </button>

        {error && <p className="text-red-700 mt-2">{error}</p>}

        <p className="mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-400"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

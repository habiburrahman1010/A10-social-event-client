import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser, logOut } = useContext(AuthContex);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must have 6 chars, 1 uppercase & 1 lowercase");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            logOut().then(() => {
              Swal.fire({
                icon: "success",
                title: "Account created!",
                text: `Welcome, ${name}! Please log in.`,
                confirmButtonText: "Ok",
              }).then(() => {
                navigate("/login");
              });
            });
          })
          .catch((err) => {
            console.error("Profile update failed:", err);
            Swal.fire({
              icon: "info",
              title: "Please log in",
            });
            navigate("/login");
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl m-auto my-8">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <h2 className="font-bold text-2xl text-center py-4">Welcome to Register</h2>
          <input className="input input-bordered mb-3" type="text" name="name" placeholder="Name" required />
          <input className="input input-bordered mb-3" type="text" name="photo" placeholder="Photo URL" required />
          <input className="input input-bordered mb-3" type="email" name="email" placeholder="Email" required />
          <input className="input input-bordered mb-3" type="password" name="password" placeholder="Password" required />
          <button className="btn btn-neutral w-full">Register</button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

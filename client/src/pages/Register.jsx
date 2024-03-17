import React from "react";
import { Link } from "react-router-dom";

const Resgister = () => {
  return (
    <div className="auth">
      <h1>Resgister</h1>
      <form action="" className="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Resgister</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Resgister;

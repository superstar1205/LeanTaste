import React, { useState } from "react";
import { api } from "../contexts/AppContext";
import "./form.css";
import { Link } from "react-router-dom";
import food from "./images/food.png";
// import logo from '../Images/logogreen.pnp'

const Form = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [status, setStatus] = useState('')

  const register = async (e) => {
    e.preventDefault();
    console.log(info);
    try {
      const res = await api.post("/auth/admin/signup", info);
      console.log(res.data);
      if (res.data.success === true) {
        window.location.replace("http://localhost:3000/login");
      }
    } catch (error) {
      if (error.response.data.apierror.message) {
        console.log(error.response.data.apierror.message);
        setStatus(error.response.data.apierror.message)
      }
    }
  };

  return (
    <div>
      <div className="parent mx-auto">
        <div className="main">
          <div className="child">
            <div className="double">
              <div className="image ml-3">
                <p className="text-3xl">
                  Lean<span className="text-green-800">Taste</span>
                </p>
                <p>Here to eat Enjoy the food</p>

                <img src={food} alt="" />
              </div>

              <div className="forms">
                <form action="" onSubmit={register}>
                  <h3>SIGNUP</h3>
                  FirstName
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="firstname"
                  />
                  <br />
                  LastName
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="lastname"
                  />
                  <br />
                  E-mail
                  <br></br>
                  <input
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="text"
                    name="email"
                  />
                  <br />
                  phone
                  <br />
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, mobile: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="number"
                    name="phone"
                  />
                  <br />
                  Password
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    className="px-3 focus:border-2 border-green-800
                   outline-none"
                    type="password"
                    name="password"
                  />
                  <br />
                  <p className="mt-3 text-red-500 text-center">{status}</p>
                  <button className="button text-green-800" type="submit">
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-green-800
                    "
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;

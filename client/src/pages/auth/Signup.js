import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { registerUser, reset } from "../../features/auth/authSlices";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const [messages, setMessages] = useState();

  //select state from store
  const { registered, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || registered) {
      navigate("/login");
    }

    dispatch(reset());
  }, [navigate, dispatch, isSuccess, registered]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setMessages("Passwords do not match");
    } else {
      const Data = { name, email, password };

      dispatch(registerUser(Data));
    }
  };

  return (
    <div className=" mt-40 container mx-auto text-center">
      <section className="heading">
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <div className="flex items-center justify-center space-x-5 mt-10 mb-10">
          {messages && <Message severity="warning">{messages}</Message>}
          {isError && <Message severity="error">{message}</Message>}
          {isLoading && <Loader />}
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
              required
              minLength={6}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>

        <p className="mt-8">
          Have an account?
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-700 font-semibold ml-2"
          >
            sign In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Signup;

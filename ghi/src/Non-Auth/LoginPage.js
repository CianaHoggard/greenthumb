import React, { useState } from "react";
import { useToken } from '../Token';
import Footer from "../Footer";

const LoginPage = () => {
  const { login } = useToken();
  const [incorrectAuth, setIncorrectAuth] = useState("alert alert-danger d-none")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginOk = await login(formData.email, formData.password)
    if (!loginOk.ok) {
      setIncorrectAuth("alert alert-danger")
    }
  }

  return (
    <>
      <div className="row" >
        <div className="col-6">
          <div className="shadow p-3 mt-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleFormChange}
                  placeholder="..."
                  type="text"
                  name="email"
                  className="form-control"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleFormChange}
                  placeholder="..."
                  type="text"
                  name="password"
                  className="form-control"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className={incorrectAuth} role="alert">
                {" "}
                Incorrect email or password!{" "}
              </div>
              <button className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

import React from "react";
import { useState } from "react";

const Signup = () => {
  const [creditial, setCreditial]=useState({name:"", email:"", password:""})
  const handleChange = (e)=> {
    setCreditial({...creditial, [e.target.name]:e.target.value})
  }
  return (
    <div className="container">
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4 position-relative">
          <label htmlFor="Fname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={creditial.name}
            onChange={handleChange}
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="email"
              
            >
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={creditial.email}
              aria-describedby="EmailPrepend"
              required
            />
            <div className="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="Password" className="form-label">
            password
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="PasswordPrepend"
            >
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={creditial.password}
              aria-describedby="PasswordPrepend"
              required
            />
            <div className="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label">
            Re-password
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={creditial.password}
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div className="invalid-tooltip">Please enter valid Email.</div>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

import React from "react";
import "./Register.css";

function Register() {
  return (
    <main className="container py-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4">Sign-up</h1>

      <form onSubmit={(event) => event.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="username" name="username" type="text" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" type="text" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" type="text" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-control" required />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" name="password" type="password" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </main>
  );
}

export default Register;
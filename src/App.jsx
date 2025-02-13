 // eslint-disable-next-line no-unused-vars
 import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/images/mii logo.png";
import illustration from "./assets/images/bro.png";


function App() {
  return (
    <>
      {<img src={logo} alt="MII Foundation Logo" className="logo" />}
      <div className="container login-container ">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="form-card p-4 shadow rounded-3">
              <div className="welcome-text">Welcome! Admin,</div>
              <h1 className="panel-text mb-4">Log in to Admin Panel</h1>

              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    User name
                  </label>
                  <div className="form-textbox">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your user name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="position-relative form-textbox">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your Password"
                    />
                    <button
                      type="button"
                      className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                    ></button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-decoration-none text-muted">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn login-btn w-100 mb-3">
                  Login
                </button>

                <div className="register-text text-center">
                  Don&apos;t have an Account? <a href="#">Register</a>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center">
            <div className="illustration-container">
              <img
                src={illustration}
                alt="Analytics Dashboard Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

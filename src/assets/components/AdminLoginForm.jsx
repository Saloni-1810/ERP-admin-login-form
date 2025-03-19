// eslint-disable-next-line no-unused-vars
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../images/mii_logo.png";
import illustration from "../images/bro.png";

import styles from "./AdminLoginForm.module.css";

const AdminLoginForm = () => {
  return (
    <div>
      {<img src={logo} alt="MII Foundation Logo" className={styles.logo} />}
      <div className={`container ${styles.loginContainer}`}>
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className={`${styles.formCard} p-4 shadow rounded-3`}>
              <div className={styles.welcomeText}>Welcome! Admin,</div>
              <h1 className={`${styles.panelText} mb-4`}>
                Log in to Admin Panel
              </h1>

              <form>
                <div className="mb-3">
                  <label htmlFor="username" className={styles.formLabel}>
                    User name
                  </label>
                  <div className={styles.formTextbox}>
                    <input
                      type="text"
                      className={styles.formControl}
                      id="username"
                      placeholder="Enter your user name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className={styles.formLabel}>
                    Password
                  </label>
                  <div className={`position-relative ${styles.formTextbox}`}>
                    <input
                      type="password"
                      className={styles.formControl}
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

                <button
                  type="submit"
                  className={`btn w-100 mb-3 ${styles.loginButton} `}
                >
                  Login
                </button>

                <div className={`${styles.registerText} text-center`}>
                  Don&apos;t have an Account? <a href="#">Register</a>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center">
            <div className={styles.illustrationContainer}>
              <img
                src={illustration}
                alt="Analytics Dashboard Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;

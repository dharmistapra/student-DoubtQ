import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signInGoogle } from "../../Redux/Loginpages/authSlice";
import "./Login.css";
import GoogleButton from "react-google-button";
import { walletApi } from "../../Redux/TotalAmountslice";
import PulseLoader from "react-spinners/PulseLoader";

const Signin = () => {
  const [loader, setLoader] = useState(false);

  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const models = useSelector((state) => state.models);

  // sign in form validation
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({});

  const onSubmit1 = (data) => {
    setLoader(false);
    localStorage.setItem("token", token);
    dispatch(signIn(data));
    setLoader(true);
  };

  // google stuff

  useEffect(() => {
    if (auth) {
      if (auth.isAuthenticated && auth.isAuthenticatedStatus === 1) {
        if (auth.user.googleverified === 1) {
          navigate("/dashboard");
        } else {
          navigate("/signupmodel");
        }
      } else if (!auth.isAuthenticated && auth.isAuthenticatedStatus === 0) {
        navigate("/signin");
      }
    }

    const initGoogleAPI = async () => {
      const params = {
        client_id:
          "574059073316-7g49pr343qu1jmobfkis2apchn2mhr3v.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "DoubtQ",
      };

      await new Promise((resolve) => window.gapi.load("auth2", resolve));
      await window.gapi.auth2.init(params);
    };

    initGoogleAPI();
  }, [auth]);

  const handleGoogleLogin = async (googleUser) => {
    const auth2 = window.gapi.auth2;

    if (!auth2) {
      console.error("Google API client library not initialized.");
      return;
    }

    const idToken = googleUser.getAuthResponse().id_token;

    await dispatch(signInGoogle({ idToken: idToken }));
  };

  const handleGoogleFailure = (error) => {};

  // ends

  return (
    <>
      <div className="login-register-bg">
        <main className="d-lg-flex align-items-center justify-content-center d-block h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto ">
                <div className="logo pt--20 pb--20 text-center">
                  <Link to="/">
                    <img
                      src="/images/logo/doubt-q.png"
                      alt="DoubtQ Logo Images"
                    />
                  </Link>
                </div>
                <div className="rbt-contact-form contact-form-style-1 rbt-shadow-box mb--50">
                  <div className="row align-items-center">
                    <div className="col-lg-5 mb_md--30 mb_sm--30 text-center">
                      <h4 className="title">
                        Get One Step Closer To <br />
                        <span className="normal-text">Your A+ Grade</span>
                      </h4>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--30">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="/images/icons/sign_icon01.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">Step by Step Solution</h6>
                          <p>with Explanation</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="/images/icons/sign_icon02.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">Save Time</h6>
                          <p>Never Miss Deadline</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="/images/icons/sign_icon03.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">100% Accuracy</h6>
                          <p>0% Plagiarism</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="/images/icons/sign_icon04.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">100% Confidential</h6>
                          <p>Fully Confident</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 pl--30 pl_sm--0 border-signup">
                      <div className="">
                        <h4 className="title text-center mb--10">Sign In</h4>
                        <form
                          onSubmit={handleSubmit1(onSubmit1)}
                          action="#"
                          className="rbt-profile-row rbt-default-form row row--15"
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label>Email</label>
                              <input
                                placeholder="Enter Your Email ID"
                                type="email"
                                {...register1("email", {
                                  required: "Please Enter A Valid Email!",
                                  // pattern: {
                                  //     value:
                                  //         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  // },
                                })}
                              />
                              <p className="text-danger">
                                {errors1.email && errors1.email.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label>Password</label>
                              <input
                                placeholder="Enter your password"
                                type="password"
                                {...register1("password", {
                                  required: "Enter Your Password",
                                  minLength: {
                                    value: 6,
                                    message: "Password must be 6 digit",
                                  },
                                })}
                              />
                              {
                                <p className="text-danger">
                                  {errors1.password && errors1.password.message}
                                </p>
                              }
                            </div>
                          </div>

                          <span className="text-danger-signin">
                            {auth.error ? auth.error.error : ""}
                          </span>
                          <div className="col-lg-12 col-md-12 col-12 text-end">
                            <div className="rbt-form-group">
                              <button
                                className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                                type="submit"
                                disabled={
                                  auth.loading
                                    ? true
                                    : auth.isAuthenticated === false
                                    ? false
                                    : ""
                                }
                              >
                                {auth.loading ? (
                                  <PulseLoader
                                    className="my-2"
                                    color="#ffffff"
                                  />
                                ) : (
                                  "Sign In"
                                )}
                              </button>
                            </div>
                            <div className="mt--5">
                              <Link className="color-primary pt--10" to="#">
                                Forgot password?
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 mb--10 text-center">
                            <p>Or Login With</p>
                            <div className="rbt-form-group">
                              <GoogleButton
                                className="rbt-btn btn-border radius-round-6 btn-sm mr--10 text-center w-100 mb_sm--10"
                                onClick={() => {
                                  const auth2 = window.gapi.auth2;

                                  if (!auth2) {
                                    console.error(
                                      "Google API client library not initialized."
                                    );
                                    return;
                                  }

                                  auth2
                                    .getAuthInstance()
                                    .signIn()
                                    .then(
                                      handleGoogleLogin,
                                      handleGoogleFailure
                                    );
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 text-center mt--50">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="color-primary">
                              Sign up
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Modal */}
      </div>
    </>
  );
};

export default Signin;

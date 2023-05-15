import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "../../Selectfrom.css";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Login.css";
import { signUp, signUpGoogle } from "../../Redux/Loginpages/registerSlice";
import GoogleButton from "react-google-button";
import PulseLoader from "react-spinners/PulseLoader";

const Signup = () => {
  const [loader, setLoader] = useState(false);

  const registers = useSelector((state) => state.registers);
  console.log(registers);
  const models = useSelector((state) => state.models);

  const token = useSelector((state) => state.registers.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Signup use form hook
  const {
    register,
    watch,
    handleSubmit,
    control,
    // control,
    formState: { errors },
  } = useForm({});

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    formState: { errors: errors2 },
  } = useForm({});

  const onSubmit = (data) => {
    delete data.cpassword;
    delete data.mobileNo;
    delete data.OTP;
    if (data.referralCode === "") {
      delete data.referralCode;
    }
    if (data.class === "") {
      delete data.class;
    }
    setLoader(false);
    dispatch(signUp(data));
    setLoader(true);
  };

  // For Change password
  const password = watch("password");
  const password2 = watch2("password2");

  // google stuff

  useEffect(() => {
    if (registers) {
      if (registers.isAuthenticated) {
        if (models.isAuthenticated) {
          navigate("/dashboard");
        } else if (registers.user.googleverified === 1) {
          navigate("/dashboard");
        } else {
          navigate("/signupmodel");
        }
      } else {
        navigate("/signup");
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
  }, [registers, models]);

  const handleGoogleLogin = async (googleUser) => {
    const auth2 = window.gapi.auth2;

    if (!auth2) {
      console.error("Google API client library not initialized.");
      return;
    }

    const idToken = googleUser.getAuthResponse().id_token;

    await dispatch(signUpGoogle({ idToken: idToken }));
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
                        <h4 className="title text-center mb--10">Sign Up</h4>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          action="#"
                          className="rbt-profile-row rbt-default-form row row--15"
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label>Email</label>
                              <input
                                placeholder="Enter Your Email ID"
                                type="email"
                                {...register("email", {
                                  required: "Please Enter A Valid Email!",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  },
                                })}
                              />
                              <p className="text-danger">
                                {errors.email && errors.email.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label>Password</label>
                              <input
                                placeholder="Enter your password"
                                type="password"
                                {...register("password", {
                                  required: "You must specify a password",
                                  minLength: {
                                    value: 6,
                                    message:
                                      "Password must have at least 8 characters",
                                  },
                                })}
                              />
                              <p className="text-danger">
                                {errors.password && errors.password.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label>Confirm Password</label>
                              <input
                                placeholder="Re-enter your password"
                                type="password"
                                {...register("cpassword", {
                                  required: "Confirm password is required",
                                  validate: (value) =>
                                    value === password ||
                                    "The password does not match",
                                })}
                              />
                              <p className="text-danger">
                                {errors.cpassword && errors.cpassword.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label>Mobile Number</label>

                              <Controller
                                name="mobileNo"
                                control={control}
                                rules={{
                                  required: "Mobile number is required",
                                }}
                                render={({
                                  field: { onChange, onBlur, value, name, ref },
                                }) => (
                                  <PhoneInput
                                    className="mb-4"
                                    country={"us"}
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    inputRef={ref}
                                  />
                                )}
                              />
                              {errors.mobileNo && (
                                <span className="text-danger">
                                  {errors.mobileNo.message}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label>OTP</label>
                              <input
                                className="p-1"
                                placeholder="Type your OTP here"
                                type="tel"
                                {...register("OTP", {
                                  required: "You must OTP",
                                  minLength: {
                                    value: 4,
                                    message:
                                      "OTP must have at least 4 characters",
                                  },
                                })}
                              />
                              <p className="text-danger">
                                {errors.OTP && errors.OTP.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="filter-select rbt-modern-select mb--15">
                              <label>Class</label>
                              <div className="dropdown react-bootstrap-select w-100">
                                <select
                                  id="class-signup"
                                  className="w-100"
                                  {...register("class")}
                                >
                                  <option value="">Select your Class</option>
                                  <option value="1">John</option>
                                  <option value="2">Due</option>
                                  <option value="3">Due John</option>
                                  <option value="4">johndue</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label>Referral Code </label>
                              <input
                                placeholder="Enter your referral code"
                                type="text"
                                {...register("referralCode", {
                                  minLength: {
                                    value: 12,
                                    message: "referral code must 12 characters",
                                  },
                                })}
                              />
                              <p className="text-danger">
                                
                                {errors.referralCode &&
                                  errors.referralCode.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              {/* <Link
                                                                className="rbt-btn btn-border radius-round-6 btn-sm mr--10 text-center w-100 mb_sm--10"
                                                                // to="https://DoubtQ-backend.onrender.com/student/register/auth/google"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#staticBackdrop"
                                                            >
                                                                <img
                                                                    className="mr--10"
                                                                    src="/images/icons/google.svg"
                                                                    alt="img"
                                                                />
                                                                Continue With Google
                                                            </Link> */}
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
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <button
                                className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                                type="submit"
                                disabled={
                                  registers.loading
                                    ? true
                                    : registers.isAuthenticated === false
                                    ? false
                                    : ""
                                }
                              >
                                {registers.loading ? (
                                  <PulseLoader className="my-2" color="#ffffff" />
                                ) : (
                                  "Sign Up"
                                )}
                              </button>
                            </div>
                          </div>
                          <p className="text-danger text-center my-4">
                            {registers.error && registers.error.error}
                          </p>
                          <div className="col-lg-12 col-md-12 col-12 text-center mt--50">
                            Already have an account?
                            <Link className="color-primary" to="/signin">
                              Sign in
                            </Link>
                            <br />
                            By Clicking Sign up, You agree our
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              Terms &amp; Conditions
                            </Link>
                            ,
                            <Link to="#">
                              Refund Policy &amp; Privacy Policy.
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
      </div>
    </>
  );
};

export default Signup;

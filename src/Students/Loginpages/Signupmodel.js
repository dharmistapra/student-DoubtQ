import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpmodels } from "../../Redux/Loginpages/modelSlice";

function Signupmodel() {
  const location = useLocation().pathname;

  const models = useSelector((state) => state.models);

  const token = useSelector((state) => state.models.token);
  const registers = useSelector((state) => state.registers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch,
    control,
    formState: { errors: errors2 },
  } = useForm({});

  useEffect(() => {
    if (models) {
      if (models.isAuthenticated && models.isAuth === 1) {
        navigate("/dashboard");
      } else if (models.isAuth === 2) {
        navigate("/signup");
      }
    }
  }, [models, registers]);
  //second modal form validation
  const onSubmit2 = (data) => {
    const tokens = localStorage.getItem("token");

    const model = {
      token: tokens,
      password: data.password,
      class: data.class,
      // referralCode: data.referralCode
    };
    dispatch(signUpmodels(model));
  };

  // For Change password
  const password = watch("password");

  return (
    <>
      {/* Modal */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Welcome User
            </h5>
          </div>
          <div className="modal-body">
            <form
              onSubmit={handleSubmit2(onSubmit2)}
              action="#"
              className="rbt-profile-row rbt-default-form row row--15"
            >
              <div className="col-lg-12 col-md-12 col-12">
                <div className="rbt-form-group">
                  <label>Password</label>
                  <input
                    id="password2"
                    placeholder="Enter your password"
                    type="password"
                    {...register2("password", {
                      required: "Enter your password",
                      minLength: {
                        value: 6,
                        message: "password is must be 6 digit",
                      },
                    })}
                  />
                  <p className="text-danger">
                    {errors2.password && errors2.password.message}
                  </p>
                </div>
                <div className="rbt-form-group">
                  <label>Confirm Password</label>
                  <input
                    placeholder="Re-enter your password"
                    type="password"
                    {...register2("cpassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === password || "The password does not match",
                    })}
                  />
                  <p className="text-danger">
                    {errors2.cpassword && errors2.cpassword.message}
                  </p>
                </div>
                <div className="rbt-form-group">
                  <label>Mobile Number</label>

                  <Controller
                    name="mobileNo"
                    control={control}
                    rules={{ required: "Mobile number is required" }}
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
                  {errors2.mobileNo && (
                    <span className="text-danger">
                      {errors2.mobileNo.message}
                    </span>
                  )}
                </div>
                <div className="rbt-form-group">
                  <label>OTP</label>
                  <input
                    placeholder="Type your OTP here"
                    type="tel"
                    {...register2("OTP2", {
                      required: "You must OTP",
                      minLength: {
                        value: 4,
                        message: "OTP must have at least 4 characters",
                      },
                    })}
                  />
                  <p className="text-danger">
                    {errors2.OTP2 && errors2.OTP2.message}
                  </p>
                </div>
                <div className="filter-select rbt-modern-select mb--15">
                  <label>Class</label>
                  <div className="dropdown react-bootstrap-select w-100">
                    <select
                      id="class-signup"
                      className="w-100"
                      {...register2("class", { required: true })}
                    >
                      <option value="">Select your Subject</option>
                      <option value="1">John</option>
                      <option value="2">Due</option>
                      <option value="3">Due John</option>
                      <option value="4">johndue</option>
                    </select>
                    {errors2.class && (
                      <p className="text-danger">Please select a subject</p>
                    )}
                  </div>
                </div>
                <div className="rbt-form-group">
                  <label>Referral Code</label>
                  <input
                    placeholder="# Enter your referral code"
                    type="text"
                    {...register2("referralCode", {
                      minLength: {
                        value: 12,
                        message: "referral code must 12 characters",
                      },
                    })}
                  />
                  <p className="text-danger">
                    {" "}
                    {errors2.referralCode && errors2.referralCode.message}
                  </p>
                </div>
                <button
                  className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                  //to="#"
                  type="submit1"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signupmodel;

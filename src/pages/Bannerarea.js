import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Odometer from "react-odometerjs";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Selectfrom.css";

import { useDispatch, useSelector } from "react-redux";
import { registeraskque } from "../Redux/registerQuestionSlice";
import { queTypepriceApi } from "../Redux/queTypePriceSlice";
import { questionsub } from "../Redux/questionSubjectSlice";
import { questiontypeApi } from "../Redux/questionTypeSlice";

const About = () => {

  //registerask Api
  const registerask = useSelector((state) => state.registerask);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);


  //Question Type Api
  const queTypeprice = useSelector((state) => state.queTypeprice);

  //questiontype
  const questiontype = useSelector((state) => state.questiontype);

  const questionTypeData = questiontype.user && questiontype.user.data.map((value) => {
    return value.questionType;
  });


  useEffect(() => {
    let tokens = localStorage.getItem("token");
    dispatch(queTypepriceApi(tokens));
  }, [dispatch]);

  //QuestionSubject Api
  const questionSubject = useSelector((state) => state.questionSubject);

  useEffect(() => {
    let tokens = localStorage.getItem("token");
    dispatch(questionsub(tokens));
    dispatch(questiontypeApi(tokens));
  }, [dispatch]);



  const onSubmit = (data) => {

    let tokens = localStorage.getItem("token");

    const formData = new FormData();
    const files = data.questionPhoto;
    // formData.append("token", tokens);
    formData.append("email", data.email);
    formData.append("password", data.password);
    // formData.append("mobileNo", data.mobileNo);
    // formData.append("OTP", data.OTP);
    formData.append("questionSubject", data.subject);

    for (let i = 0; i < files.length; i++) {
      formData.append(`questionPhoto`, files[i]);
    }

    formData.append("class", data.class);
    formData.append("questionType", data.quetype);
    formData.append("question", data.question);

    dispatch(registeraskque(formData));

  };

  //Odometer
  const [odometerValue, setOdometerValue] = useState(0);
  const [odometerValue1, setOdometerValue1] = useState(0);
  const [odometerValue2, setOdometerValue2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(45);
      setOdometerValue1(4);
      setOdometerValue2(82);
    }, 1000);
  }, []);

  //About from
  const { register, handleSubmit, control, formState: { errors }, } = useForm({});

  //btn-Show Field
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(true);
  }

  return (
    <>
      <main className="rbt-main-wrapper">
        {/* Start Banner Area */}
        <div className="rbt-banner-area rbt-banner-1">
          <div className="container-fluid">
            <div className="row g-5 pb--60 pt--50 justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <div className="inner">
                    <h1 className="title">
                      <span className="theme-gradient">Get</span> Online
                      Question Help{" "}
                      <span className="theme-gradient">Step-by-Step</span>{" "}
                      Solutions
                    </h1>
                    <p className="description">
                      Solutions when you need it,
                      <br /> the way you need it only at DoubtQ
                    </p>
                    <h1 className="title">Available 24x7</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-contact-form contact-form-style-1 text-center">
                  <h4 className="mb-0">Place Your Question here!</h4>
                  <p className="description mb--20">
                    Type your question here or add files
                  </p>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="#"
                    className="rbt-profile-row rbt-default-form row row--15"
                  >
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="rbt-form-group">
                        <input
                          placeholder="Enter Your Email ID"
                          type="email"
                          {...register("email", {
                            required: "Please Enter A Valid Email!",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                          })}
                        />{" "}
                        <p className="error-msg">
                          {errors.email && errors.email.message}
                        </p>
                      </div>
                      <div className="rbt-form-group">
                        <input
                          id="Password"
                          placeholder="Enter Password"
                          type="password"
                          {...register("password", {
                            required: "enter your password",
                            minLength: {
                              value: 6,
                              message: "password atleast 6 characters",
                            },
                          })}
                        />
                        <p className="error-msg">
                          {errors.password && errors.password.message}
                        </p>
                      </div>
                      <div className="rbt-form-group">
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
                        {errors.mobileNo && (
                          <p className="error-msg">
                            {errors.mobileNo.message}
                          </p>
                        )}
                      </div>
                      <div className="rbt-form-group">
                        <input
                          placeholder="Enter Your OTP"
                          type="tel"
                          {...register("OTP", {
                            required: "must be OTP",
                            minLength: {
                              value: 4,
                              message: " 4 digit OTP",
                            },
                          })}
                        />
                        <p className="error-msg">
                          {errors.OTP && errors.OTP.message}{" "}
                        </p>
                      </div>
                      <div className="filter-select rbt-modern-select mb--15">
                        <div className="dropdown react-bootstrap-select w-100">
                          <select
                            id="class-signup"
                            className="w-100"
                            {...register("subject", { required: true })}
                          >
                            <option value="">Select your subject</option>
                            {questionSubject.user && questionSubject.user.data.map((data) => {
                              return (
                                <option>{data.questionSubject}</option>
                              )
                            })}
                          </select>
                          {errors.subject && (
                            <p className="error-msg">
                              Please select a subject
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="rbt-form-group mb--15">
                        <textarea
                          id="question"
                          cols={20}
                          placeholder="Type your question here"
                          rows={3}
                          defaultValue={""}
                          {...register("question", {
                            required: "Your question is required",
                          })}
                        />
                        <p className="error-msg">
                          {errors.question && errors.question.message}
                        </p>
                      </div>
                      <div className="rbt-form-group">
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input pb--5 pt--5"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                              {...register("questionPhoto", {
                                required: "File selected",
                              })}
                              multiple
                              accept=".png,.jpg,.jpeg,.tif,.tiff,.bmp,.gif,.ico"
                            />
                            <p className="error-msg">
                              {errors.questionPhoto && errors.questionPhoto.message}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="filter-select rbt-modern-select mb--15">
                        <div className="dropdown react-bootstrap-select w-100">
                          <select
                            id="class-signup"
                            className="w-100"
                            {...register("class")}
                          >
                            <option value="">Select your class</option>
                            <option value="1">John</option>
                            <option value="2">Due</option>
                            <option value="3">Due John</option>
                            <option value="4">johndue</option>
                          </select>
                        </div>
                      </div>
                      <div className="filter-select rbt-modern-select">
                        <div className="dropdown react-bootstrap-select w-100">
                          <select
                            id="class-signup"
                            className="w-100"
                            {...register("quetype", { required: true })}
                          >
                            <option value="">
                              Select Your question Type
                            </option>{" "}
                            {queTypeprice.user &&
                              queTypeprice.user.data.map((option) => {
                                const matchingQuestionType =
                                  questionTypeData.find(
                                    (questionType) =>
                                      questionType === option.type
                                  );

                                return (
                                  <option
                                    key={option.type}
                                    value={option.type}
                                  >
                                    {matchingQuestionType}
                                  </option>
                                );
                              })}

                          </select>
                          {errors.quetype && (
                            <p className="error-msg">
                              Please select Question Type
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      {isVisible && <input className="mt-4" type="text" placeholder="Please enter referral code" />}
                    </div>
                    <div className="col-12 mt--20">
                      <div className="rbt-form-group">
                        <Link to="#" onClick={toggleVisibility}
                          className="rbt-btn btn-border radius-round-6 btn-sm mr--10"
                        >
                          Refer by friend ?{" "}
                        </Link>
                        <button
                          type="submit"
                          className="rbt-btn btn-gradient btn-sm"
                        >
                          Post Question
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        <div className="home-offerbg">
          <div className="container">
            <div className="offer-text text-center">
              <div className="offer-big">Get $ 1</div>
              <div className="mb_sm--10">
                in Wallet On Successful Registration
              </div>
              <Link to="/signup" className="ml--20 ml_sm--0 signin-btn">
                Sign Up{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="future-box-bg">
          <div className="container">
            <div className="row g-5">
              {/* Start Single Counter  */}
              <div className="col-md-4 col-sm-auto col-4">
                <div className="inner d-md-flex align-items-center justify-content-center">
                  <div className="rbt-round-icon">
                    <img
                      src="/images/icons/tutors.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="counter-text">
                    <h3 className="counter mb--0">
                      <span className="odometer" data-count={45}>
                        <Odometer
                          value={odometerValue}
                          format="(,ddd)"
                          theme="default"
                        />
                      </span>
                      <span className="count-text">K+</span>
                    </h3>
                    <span className="subtitle">Tutors</span>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
              {/* Start Single Counter  */}
              <div className="col-md-4 col-sm-auto col-4">
                <div className="inner d-md-flex align-items-center justify-content-center">
                  <div className="rbt-round-icon">
                    <img
                      src="/images/icons/students.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="counter-text">
                    <h3 className="counter mb--0">
                      <span className="odometer" data-count={4}>
                        <Odometer
                          value={odometerValue1}
                          format="(,ddd)"
                          theme="default"
                        />
                      </span>
                      <span className="count-text">M+</span>
                    </h3>
                    <span className="subtitle">Students</span>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
              {/* Start Single Counter  */}
              <div className="col-md-4 col-sm-auto col-4">
                <div className="inner d-md-flex align-items-center justify-content-center">
                  <div className="rbt-round-icon">
                    <img
                      src="/images/icons/questions.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="counter-text">
                    <h3 className="counter mb--0">
                      <span className="odometer" data-count={82}>
                        <Odometer
                          value={odometerValue2}
                          format="(,ddd)"
                          theme="default"
                        />
                      </span>
                      <span className="count-text">M+</span>
                    </h3>
                    <span className="subtitle">Questions Solved</span>
                  </div>
                </div>
              </div>
              {/* End Single Counter  */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About;

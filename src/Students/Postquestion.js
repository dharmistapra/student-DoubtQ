import React from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postQuestionApi, postQuestionreset } from "../Redux/postQuestionSlice";
import { useState, useEffect } from "react";
import { queTypepriceApi } from "../Redux/queTypePriceSlice";
import { walletApi } from "../Redux/TotalAmountslice";
import { questionsub } from "../Redux/questionSubjectSlice";
import { questiontypeApi } from "../Redux/questionTypeSlice";

const Postquestion = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const postQuestion = useSelector((state) => state.postQuestion);
  console.log(postQuestion);
  const queTypeprice = useSelector((state) => state.queTypeprice);
  // console.log(queTypeprice);
  console.log(postQuestion.user && postQuestion.user.status);
  const referTofrnd = useSelector((state) => state.referTofrnd);

  let tokens = localStorage.getItem("token");

  //questiontype
  const questiontype = useSelector((state) => state.questiontype);
  // console.log(questiontype);
  const questionTypeData =
    questiontype.user &&
    questiontype.user.data.map((value) => {
      return value.questionType;
    });

  const dispatch = useDispatch(); //Postquestion drop-dwon
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data);
    const files = data.questionPhoto;
    console.log(files);
    formData.append("token", tokens);
    formData.append("question", data.question);
    formData.append("questionSubject", data.questionSubject);
    formData.append("questionType", data.questionType);

    for (let i = 0; i < files.length; i++) {
      formData.append(`questionPhoto`, files[i]);
    }

    dispatch(postQuestionApi(formData));

    reset();
  };

  //QuestionSubject Api
  const questionSubject = useSelector((state) => state.questionSubject);

  useEffect(() => {
    let tokens = localStorage.getItem("token");
    dispatch(questionsub(tokens));
    dispatch(questiontypeApi(tokens));
  }, [dispatch]);

  useEffect(() => {
    dispatch(queTypepriceApi(tokens));
    dispatch(walletApi(tokens));
  }, [dispatch]);

  const handleQuestionTypeChange = (event) => {
    const selectedType = event.target.value;
    const selectedOption =
      queTypeprice.user &&
      queTypeprice.user.data.find((item) => item.type === selectedType);
    setSelectedOption(selectedOption);
    setSelectedPrice(selectedOption && selectedOption.price);
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />{" "}
              <span className="normal-text">Hello,</span>{" "}
              {referTofrnd.user && referTofrnd.user.info.name}
            </h5>
          </div>
        </div>
        <div className="dashboard">
          <div className="dashboard_bg pb--20 pt--20">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h4 className="mb--0">Ask a Question</h4>
                    <p>Have your Questions answered by Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60 mt--20 rbt-border">
                  <div className="content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title">
                            <h4>How it works</h4>
                          </div>
                        </div>
                        <ul className="rbt-list-style-2">
                          <li>
                            <i className="feather-check" /> Post one question at
                            one time
                          </li>
                          <li>
                            <i className="feather-check" /> Get an instant
                            answer from our experts
                          </li>
                        </ul>

                        <div className="col-md-12 col-lg-12 mb--30">
                          <textarea
                            id="ckplot"
                            name="question"
                            {...register("question", {
                              required: "Please Enter A Question",
                            })}
                          />
                          <p className="text-danger">
                            {errors.question && errors.question.message}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <div className="filter-select rbt-modern-select mb--15">
                            <div className="dropdown react-bootstrap-select w-100">
                              <input
                                type="file"
                                className="custom-file-input pb--5 pt--5"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                name="questionPhoto"
                                multiple
                                {...register("questionPhoto")}
                              />
                            </div>
                          </div>

                          <div className="filter-select rbt-modern-select mb--15">
                            <div className="dropdown react-bootstrap-select w-100">
                              <select
                                id="class-signup"
                                className="w-100"
                                {...register("questionSubject", {
                                  required: true,
                                })}
                              >
                                <option value="">Select Your Subject</option>
                                {questionSubject.user &&
                                  questionSubject.user.data.map((data) => {
                                    return (
                                      <option key={data._id}>{data.questionSubject}</option>
                                    );
                                  })}
                              </select>
                              {errors.questionSubject && (
                                <span className="text-danger">
                                  Please select a Subject
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="filter-select rbt-modern-select mb--15">
                            <div className="dropdown react-bootstrap-select w-100">
                              <select
                                id="class-signup"
                                className="w-100"
                                {...register("questionType", {
                                  required: true,
                                })}
                                onChange={handleQuestionTypeChange}
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
                              {errors.questionType && (
                                <span className="text-danger">
                                  Please select a question type
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-center align-items-center">
                          <div className="col-lg-12 mb-5">
                            <input
                              className="rbt-btn btn-gradient"
                              type="text"
                              value={
                                selectedOption
                                  ? ` Question Price : $ ${selectedOption.price}`
                                  : ""
                              }
                              placeholder="Price"
                              readOnly
                            />
                          </div>
                          <div className="col-lg-12">
                            <h6>
                              (so we can find the right DoubtQ Expert instantly)
                            </h6>
                            <button
                              className="rbt-btn btn-gradient btn-sm w-100"
                              data-bs-target={
                                postQuestion.error &&
                                postQuestion.error.error ===
                                  "Your Balance is not Suffecient!"
                                  ? "#sorrypopup"
                                  : "#thankyoupopup"
                              }
                              disabled={
                                postQuestion.isAuthenticated ||
                                postQuestion.loading
                              }
                            >
                              Post Question
                            </button>
                          </div>
                          <div>
                            <p className="text-danger">
                              {postQuestion.error && postQuestion.error.error}{" "}
                            </p>
                            <p className="text-success">
                              {postQuestion.user && postQuestion.user.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Modal */}

      <div
        className={`modal fade show ${
          (postQuestion.error && postQuestion.error.error) ||
          (postQuestion.error &&
            postQuestion.error.error === "Your Balance is not Suffecient!")
            ? "d-block"
            : "d-none"
        }`}
        id="sorrypopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="sorrypopup"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => (window.location.href = "/dashboard")}
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <i className="h1 feather-alert-triangle text-danger" />
                <h4 className="mt--20 mb--20">Sorry</h4>
                <h6 className="mb--20">
                  {postQuestion.error &&
                  postQuestion.error.error ===
                    "Your Balance is not Suffecient!" ? (
                    <p>
                      {" "}
                      Please deposit min. $ 10 <br />
                      to post the question.{" "}
                    </p>
                  ) : (
                    postQuestion.error && postQuestion.error.error
                  )}
                </h6>
                <div className="d-flex justify-content-center">
                  <button
                    className="rbt-btn btn-sm mr--10"
                    onClick={() => (window.location.href = "/postquestion")}
                  >
                    Cancel
                  </button>
                  <button
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    onClick={() => (window.location.href = "/wallet")}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Add Money</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade show ${
          postQuestion.user && postQuestion.user.message
            ? "d-block modal-open-bg"
            : "d-none"
        }`}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => (window.location.href = "/dashboard")}
                // onClick={() => setShowModal(false)}
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <i className="h1 feather-check-circle text-success" />
                <h4 className="mt--20 mb--20">Thank you,</h4>
                <h6 className="mb--20">you will receive your answer shortly</h6>
                <div className="d-flex justify-content-center">
                  <button
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    // to="/dashboard"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Ok</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postquestion;

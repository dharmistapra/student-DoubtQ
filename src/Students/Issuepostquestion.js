import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { queTypepriceApi } from "../Redux/queTypePriceSlice";
import { walletApi } from "../Redux/TotalAmountslice";
import { Issue } from "../Redux/dashboardIssueSlice";
import { updateQuestionApi } from "../Redux/updateQuestionSlice";
import Modal from "react-bootstrap/Modal";
import { questionsub } from "../Redux/questionSubjectSlice";
import { questiontypeApi } from "../Redux/questionTypeSlice";
import PulseLoader from "react-spinners/PulseLoader";

const Issuepostquestion = () => {
  const [selectedOption, setSelectedOption] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});
  const data = useSelector((state) => state.data);
  const queTypeprice = useSelector((state) => state.queTypeprice);
  const referTofrnd = useSelector((state) => state.referTofrnd);
  const dashboardIssue = useSelector((state) => state.dashboardIssue);
  const updateQuestion = useSelector((state) => state.updateQuestion);
  const navigate = useNavigate();
  console.log(updateQuestion);
  const filteredData =
    dashboardIssue.user &&
    dashboardIssue.user.info.filter((item) => item.questionId === id);
  const questionsId = filteredData && filteredData?.map((item) => item);

  const [selectedFile, setSelectedFile] = useState("");

  //questiontype
  const questiontype = useSelector((state) => state.questiontype);

  const questionTypeData =
    questiontype.user &&
    questiontype.user.data.map((value) => {
      return value.questionType;
    });

  const dispatch = useDispatch();
  let tokens = localStorage.getItem("token");

  const [questionData, setQuestionData] = useState("");

  //QuestionSubject Api
  const questionSubject = useSelector((state) => state.questionSubject);

  useEffect(() => {
    let tokens = localStorage.getItem("token");
    dispatch(questionsub(tokens));
  }, [dispatch]);

  const handleChange = (event) => {
    setQuestionData(event.target.value);
  };
  //Postquestion drop-dwon

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("token", tokens);
    formData.append("questionId", id);
    const files = data.questionPhoto;
    // Add fields based on newReason value
    if (filteredData?.[0]?.newReason === 2) {
      formData.append("questionType", data.questionType);
      formData.append("priceChange", displayedPrice);
    } else if (filteredData?.[0]?.newReason === 3) {
      formData.append("question_1", data.question);
      for (let i = 0; i < files.length; i++) {
        formData.append(`questionPhoto`, files[i]);
      }
      // formData.append("questionPhoto", data.questionPhoto[0]?);
    } else {
      formData.append("questionSubject", data.questionSubject);
    }

    dispatch(updateQuestionApi(formData));
    reset();
    setShowMessage(true);
    // if update is successful
    if (updateQuestion.user && updateQuestion.user.message) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    dispatch(Issue(tokens));
    dispatch(queTypepriceApi(tokens));
    dispatch(questiontypeApi(tokens));
  }, []);

  //  price change
  const [selectedPrice, setSelectedPrice] = useState();
  const [displayedPrice, setDisplayedPrice] = useState(0);
  console.log(
    queTypeprice.isAuthentication,
    questiontype.isAuthenticated,
    dashboardIssue.isAuthenticated
  );
  const handleQuestionTypeChange = (event) => {
    const selectedType = event.target.value;
    const selectedOption =
      queTypeprice.user &&
      queTypeprice.user.data.find((item) => item.type === selectedType);
    setSelectedOption(selectedOption);
    setSelectedPrice(selectedOption && selectedOption.price);

    const questionAddPrice =
      selectedOption.price - filteredData[0]?.questionPrice;

    setDisplayedPrice(questionAddPrice);
  };

  //show image modal
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleImageClick = (url) => {
    setShow(true);
    setImageSrc(url);
  };

  useEffect(() => {
    reset(questionsId?.[0]);
  }, [reset, dashboardIssue, queTypeprice, questionsub]);

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-titlef">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span>
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
                    <h4 className="mb--0">Issue Question</h4>
                    <p>Have you Questions answered by Experts</p>
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
                    {queTypeprice.isLoading ||
                    questiontype.loading ||
                    dashboardIssue.loading ? (
                      <div className="loader" align="center">
                        <PulseLoader color="#b02deb" />
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-title">
                              <h4>
                                {filteredData?.[0]?.newReason === 1
                                  ? "Please Change Your Subject according to Question"
                                  : filteredData?.[0]?.newReason === 2
                                  ? "Please Change Your Question type according to Question"
                                  : filteredData?.[0]?.newReason === 3
                                  ? "Please Change Your Question according to tutor's remarks"
                                  : ""}
                              </h4>
                            </div>
                          </div>
                          <ul className="rbt-list-style-2">
                            {filteredData?.[0]?.newReason === 3 ? (
                              <li>
                                <b className="text-primary">
                                  {" "}
                                  Tutor's Remark -{" "}
                                </b>
                                {filteredData?.[0]?.newReasonText}
                              </li>
                            ) : (
                              ""
                            )}
                          </ul>

                          <div className="col-md-12 col-lg-12 mb--30">
                            <textarea
                              id="ckplot"
                              name="question"
                              disabled={
                                filteredData?.[0]?.newReason === 3
                                  ? false
                                  : true
                              }
                              {...register("question")}
                              onChange={handleChange}
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
                                  {...register("questionPhoto")}
                                  disabled={
                                    filteredData?.[0]?.newReason === 3
                                      ? false
                                      : true
                                  }
                                  multiple
                                />
                                {filteredData?.[0]?.questionPhoto.map(
                                  (value, id) => {
                                    return (
                                      <div key={id}>
                                        <img
                                          className="my-4"
                                          onClick={() =>
                                            handleImageClick(value)
                                          }
                                          src={value}
                                          width={200}
                                          alt="img"
                                        />
                                        <br />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>

                            <div className="filter-select rbt-modern-select mb--15">
                              <div className="dropdown react-bootstrap-select w-100">
                                <select
                                  id="class-signup"
                                  className="w-100"
                                  disabled={
                                    filteredData?.[0] &&
                                    filteredData?.[0]?.newReason === 1
                                      ? false
                                      : true
                                  }
                                  {...register("questionSubject", {
                                    required: true,
                                  })}
                                >
                                  <option value="">Select Your Subject</option>
                                  {questionSubject.user &&
                                    questionSubject.user.data.map((data) => {
                                      if (
                                        filteredData?.[0]?.questionSubject ===
                                        data.questionSubject
                                      ) {
                                        return (
                                          <option key={data.id} selected>
                                            {data.questionSubject}
                                          </option>
                                        );
                                      } else {
                                        return (
                                          <option>
                                            {data.questionSubject}
                                          </option>
                                        );
                                      }
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
                                  disabled={
                                    filteredData?.[0]?.newReason === 2
                                      ? false
                                      : true
                                  }
                                  {...register("questionType", {
                                    required: true,
                                  })}
                                  onChange={handleQuestionTypeChange}
                                >
                                  <option value="">
                                    Select Your question Type
                                  </option>
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
                                          selected={option.type}
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
                                value={` ${
                                  displayedPrice > 0
                                    ? `You have to pay: $ ${displayedPrice.toFixed(
                                        2
                                      )}`
                                    : displayedPrice === 0
                                    ? "You don't have to pay any Charge"
                                    : displayedPrice < 0
                                    ? `You will get refund of $ ${
                                        displayedPrice * -1
                                      }`
                                    : `Question Price: $ ${filteredData?.[0]?.questionPrice}`
                                }`}
                                readOnly
                              />
                            </div>
                            <div className="col-lg-12">
                              <h6>
                                (so we can find the right VAIDIK Expert
                                instantly)
                              </h6>
                              <button
                                className="rbt-btn btn-gradient btn-sm w-100"
                                type="submit"
                                data-bs-target={
                                  updateQuestion.user &&
                                  updateQuestion.user.message
                                    ? "#thankyoupopup"
                                    : "#sorrypopup"
                                }
                                disabled={
                                  updateQuestion.loading
                                    ? true
                                    : updateQuestion.isAuthenticated === false
                                    ? false
                                    : ""
                                }
                              >
                                {/*} Update Question*/}
                                {updateQuestion.loading ? (
                                  <PulseLoader
                                    className="my-2"
                                    color="#ffffff"
                                  />
                                ) : (
                                  "Update Question"
                                )}
                                {/*updateQuestion.loading ?  'loading...' : "Update Question" */}
                              </button>
                            </div>

                            <p className="text-danger">
                              {updateQuestion.error &&
                                updateQuestion.error.error}
                            </p>
                            <p className="text-success">
                              {updateQuestion.user &&
                                updateQuestion.user.message}
                            </p>
                          </div>
                        </div>
                      </form>
                    )}
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
          (updateQuestion.error && updateQuestion.error.error) ||
          (updateQuestion.error &&
            updateQuestion.error.error === "Your Balance is not Suffecient!")
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
                  {updateQuestion.error &&
                  updateQuestion.error.error ===
                    "Your Balance is not Suffecient!" ? (
                    <p>
                      Please deposit min. $ 10 <br />
                      to post the question.
                    </p>
                  ) : (
                    updateQuestion.error && updateQuestion.error.error
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
          updateQuestion.user && updateQuestion.user.message
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

      {/* image show modal */}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="text-center">
          <img src={imageSrc} alt="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Issuepostquestion;

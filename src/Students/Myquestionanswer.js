import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { queAnsApi } from "../Redux/questionAnswerSlice";
import { ExamTimerCounter } from "./ExamTimerCounter";
import { upDownVoteApi } from "../Redux/upvoteDownvoteSlice";
import Modal from "react-bootstrap/Modal";
import MCQAnswer from "./Answer/MCQAnswer";
import TrueFalseAnswer from "./Answer/TrueFalseAnswer";
import FillInBlanksAnswer from "./Answer/FillInBlanksAnswer";
import MatchTheFollowingAnswer from "./Answer/MatchTheFollowingAnswer";
import PulseLoader from "react-spinners/PulseLoader";

const Myquestionanswer = () => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [loader, setLoader] = useState(true);
  // api data
  const upDownVote = useSelector((state) => state.upDownVote);
  console.log(upDownVote);
  const queAns = useSelector((state) => state.queAns);
  console.log(queAns.user && queAns.user.data.status);
  const question = queAns.user && queAns.user.data.question;
  console.log(question);
  const referTofrnd = useSelector((state) => state.referTofrnd);
  const studentResponse = queAns.user && queAns.user.data.studentresponse;
  const questionType = queAns.user && queAns.user.data.questionType;
  console.log(queAns.user && queAns.user.data.studentresponse);
  console.log(questionType);

  let tokens = localStorage.getItem("token");

  const { id } = useParams();
  const dispatch = useDispatch();

  const myQuestion = async () => {
    setLoader(true);
    const queData = { tokens, id };
    await dispatch(queAnsApi(queData));
    setLoader(false);
  };

  useEffect(() => {
    myQuestion();
  }, []);

  const upvoteDownVote = (data, choice) => {
    let updownvoteData;
    if (choice === true) {
      updownvoteData = {
        token: tokens,
        questionId: id,
        studentResponce: data,
        remarks: "yes",
      };
    } else {
      updownvoteData = {
        token: tokens,
        questionId: id,
        studentResponce: data,
      };
    }

    dispatch(upDownVoteApi(updownvoteData));
  };

  const handleImageClick = (url) => {
    setShow(true);
    setImageSrc(url);
  };
  const answer = queAns.user && queAns.user.data.answer;

  console.log(answer);
  const questionElement = queAns.user && queAns.user.data.question.split("\n");
  console.log(questionElement);

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
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky mb--30">
                      {/* <div className="sticky-top mb--30"> */}
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-Openitem-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="/images/icons/writing_questions.svg"
                                    alt=""
                                  />{" "}
                                  My Questions
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/dashboard" className="active">
                                      <i className="feather-arrow-right" />
                                      <span>All</span>
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    <Link to="/dashboard">
                                      <i className="feather-arrow-right" />
                                      <span>In Progress</span>
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    <Link to="/dashboard">
                                      <i className="feather-arrow-right" />
                                      <span>Open Question</span>
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    <Link to="/dashboard">
                                      <i className="feather-arrow-right" />
                                      <span>Close Question</span>
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    <Link to="/dashboard">
                                      <i className="feather-arrow-right" />
                                      <span>Issue Question</span>
                                    </Link>{" "}
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {queAns.user &&
                      queAns.user.data.status === "NotOpened" ? (
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="text-center">
                          <p className="mb--0">Time to vote within :</p>
                          <h5
                            className="w-100 mt--10 text-center"
                            id="time-countdown"
                          >
                            <ExamTimerCounter />
                          </h5>
                          <p />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* End Dashboard Sidebar  */}
                  </div>
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row">

                          <div className="col-md-12 col-lg-12 mb--20">
                            <h5>Question </h5>
                            {loader === true ?
                              <div className="loader" align="center">
                                <PulseLoader color="#b02deb" />
                              </div>
                              :
                              <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                <div className="fw-bold">
                                  {queAns.user &&
                                    queAns.user.data.question
                                      .split("\n")
                                      .map((line, index) => (
                                        <p key={index}>{line}</p>
                                      ))}
                                </div>
                                <div className="my-4">
                                  {queAns.user &&
                                    queAns.user.data.questionPhoto.map(
                                      (value, index) => {
                                        return (
                                          <div key={index}>
                                            <img
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
                            }
                          </div>

                          <div className="col-md-12 col-lg-12 mb--20 ">
                            <h5> Answer</h5>
                            {loader === true ?
                              <div className="loader" align="center">
                                <PulseLoader color="#b02deb" />
                              </div>
                              :
                              <div className="p--20 rbt-border radius-6 bg-primary-opacity questionAnswerjustify ">
                                {questionType === "TrueFalse-exp" ||
                                  questionType === "TrueFalse" ? (
                                  <TrueFalseAnswer />
                                ) : questionType === "MCQ-exp" ||
                                  questionType === "MCQ" ? (
                                  <MCQAnswer />
                                ) : questionType === "FillInBlanks-exp" ||
                                  questionType === "FillInBlanks" ? (
                                  <FillInBlanksAnswer />
                                ) : questionType ===
                                  "MatchTheFollowing-less5" ||
                                  questionType === "MatchTheFollowing-more5" ? (
                                  <MatchTheFollowingAnswer />
                                ) : questionType === "ProblemSolving" ? (
                                  answer ? (
                                    answer.replace(/<\/?p>/gi, "")
                                  ) : (
                                    ""
                                  )
                                ) : (
                                  answer &&
                                  answer.split("\n").map((value, index) => {
                                    return <p key={index}>{value}</p>;
                                  })
                                )}
                              </div>
                            }
                          </div>
                          {questionType === "MCQ-exp" ||
                            questionType === "TrueFalse-exp" ||
                            questionType === "FillInBlanks-exp" ||
                            questionType === "ShortAnswer-exp" ? (
                            <div className="col-md-12 col-lg-12 mb--20">
                              <h5>Explanation</h5>
                              <div className="p--20 rbt-border radius-6 bg-secondary-opacity questionAnswerjustify">
                                {queAns.user &&
                                  queAns.user.data.explanation &&
                                  queAns.user &&
                                  queAns.user.data.explanation
                                    .split("\n")
                                    .map((line, index) => (
                                      <p key={index}>{line}</p>
                                    ))}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="row mt--20 pt--20 border-top">
                          {queAns.user &&
                            queAns.user.data.status === "NotOpened" ? (
                            <div className="col-lg-12 col-12 text-start">
                              <h5>Was this answer helpful?</h5>
                              <button
                                onClick={() =>
                                  upvoteDownVote("upvote", false)
                                }
                                className="rbt-btn btn-border01 btn-sm "
                              >
                                <i className="color-primary feather-thumbs-up" />
                              </button>
                              <button
                                // onClick={() => upvoteDownVote("downvote")}
                                className="rbt-btn btn-border01 btn-sm  "
                                data-bs-toggle="modal"
                                data-bs-target="#re-answerpopup"
                              >
                                <i className="text-danger feather-thumbs-down" />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                          {queAns.user &&
                            (queAns.user.data.status === "Closed" ||
                              queAns.user.data.status === "Opened") ? (
                            <div className="col-lg-12 col-12 text-start">
                              <h5>Was this answer helpful?</h5>
                              {studentResponse === "upvote" ? (
                                <button className="rbt-btn active btn-border01 btn-sm">
                                  <i className="color-primary feather-thumbs-up" />
                                </button>
                              ) : (
                                <button className="rbt-btn btn-border01 btn-sm  ">
                                  <i className="text-danger feather-thumbs-down" />
                                </button>
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Modal */}
      <div
        className="modal fade"
        id="re-answerpopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="re-answerpopup"
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
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <i className="h1 feather-alert-triangle text-danger" />
                <h4 className="mt--20 mb--20">Do yoy Want to re-answer ?</h4>
                <div className="d-flex justify-content-center">
                  <Link
                    onClick={() => upvoteDownVote("downvote", true)}
                    to="#"
                    className="rbt-btn btn-sm mr--10 mr_sm--0 mb_sm--10"
                  >
                    YES
                  </Link>
                  <Link
                    onClick={() => upvoteDownVote("downvote", false)}
                    to="#"
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    data-bs-dismiss="modal"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">NO</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </Link>
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
          {" "}
          <img src={imageSrc} alt="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Myquestionanswer;

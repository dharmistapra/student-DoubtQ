import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { queAnsApi } from "../../Redux/questionAnswerSlice";

const MCQAnswer = () => {
  const queAns = useSelector((state) => state.queAns);

  let tokens = localStorage.getItem("token");

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const queData = { tokens, id };
    dispatch(queAnsApi(queData));
  }, [dispatch, tokens, id]);

  const answer = queAns.user && queAns.user.data.answer;

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="rbt-form-check p--10">
            <input
              className="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-1"
              checked={answer === "a"}
              readOnly
            />
            <label className="form-check-label" htmlFor="rbt-radio-1">
              A)
            </label>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-form-check p--10">
            <input
              className="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-2"
              checked={answer === "b"}
              readOnly
            />
            <label className="form-check-label" htmlFor="rbt-radio-2">
              B)
            </label>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-form-check p--10">
            <input
              className="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-3"
              checked={answer === "c"}
              readOnly
            />
            <label className="form-check-label" htmlFor="rbt-radio-3">
              C)
            </label>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-form-check p--10">
            <input
              className="form-check-input"
              type="radio"
              name="rbt-radio"
              id="rbt-radio-4"
              checked={answer === "d"}
              readOnly
            />
            <label className="form-check-label" htmlFor="rbt-radio-4">
              D)
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCQAnswer;

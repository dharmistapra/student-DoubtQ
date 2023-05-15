import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { queAnsApi } from "../../Redux/questionAnswerSlice";

const TrueFalseAnswer = () => {
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
      <div className="col-lg-6">
        <div className="rbt-form-check p--10">
          <input
            className="form-check-input"
            type="radio"
            name="rbt-radio"
            id="rbt-radio-1"
            checked={answer === "true"}
          />
          <label className="form-check-label" htmlFor="rbt-radio-1">
            True
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
            checked={answer === "false"}
          />
          <label className="form-check-label" htmlFor="rbt-radio-2">
            False
          </label>
        </div>
      </div>
    </>
  );
};

export default TrueFalseAnswer;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { queAnsApi } from "../../Redux/questionAnswerSlice";

const FillInBlanksAnswer = () => {
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
        {answer &&
          answer !== "undefined" &&
          JSON.parse(answer).map((value, id) => {
            return (
              <div key={id}>
                <p>
                  <span className="mx-3 fw-bolder">{id + 1}) </span>
                  {value}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FillInBlanksAnswer;

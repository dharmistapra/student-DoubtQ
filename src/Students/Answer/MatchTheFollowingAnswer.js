import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { queAnsApi } from "../../Redux/questionAnswerSlice";

const MatchTheFollowingAnswer = () => {
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
    <div>
      {answer && answer !== ""
        ? JSON.parse(answer).map((value, index) => {
            return (
              <div key={index}>
                <span className="mx-3">{value.id} </span> --- &gt;{" "}
                <span className="mx-3">{value.value}</span>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default MatchTheFollowingAnswer;

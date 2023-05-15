import React from "react";
// import { Link } from "react-router-dom";
import Problemsolvestudentsarea from "./Problemsolvestudentsarea";

const Problemsolvehelparea = () => {

    return (
        <>
            {/* start mcq help Area */}
            <div className="rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-start mb--20">
                                <h3 className="title">Who Is Pratical Based Help For?</h3>
                            </div>
                            <p>
                                Every student will encounter multiple-choice questions (Pratical Based) at some
                                point in their academic careers. Students often get stumped with
                                their multiple-choice question because they are unable to determine
                                which of the available options or answers is correct. If you can
                                identify with the issues described here, our Pratical Based assistance service
                                was made just for you. Many challenges confront students when they
                                are enrolled in high school, college, or other educational
                                institutions. Because of these challenges, their academic life is
                                more difficult. DoubtQ provides an online Pratical Based assistance service for
                                customers like you if you are one of the people who can relate to
                                this.
                            </p>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> You
                                    don’t understand your subjects
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> You
                                    don’t understand your Pratical Based questions
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> Don’t
                                    have enough time to solve each Pratical Based question
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> You
                                    are lagging behind your classmates in Pratical Based type question.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />{" "}
                                    GPA/Grades are going down &amp; you need improvement in the
                                    respective question types.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> Lack
                                    of good tutors in schools/university/classes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* end mcq help Area */}
            <Problemsolvestudentsarea/>
        </>

    )
}

export default Problemsolvehelparea;
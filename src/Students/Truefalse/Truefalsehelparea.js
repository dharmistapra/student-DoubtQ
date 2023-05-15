import React from "react";
// import { Link } from "react-router-dom";
import Truefalsestudentsarea from "./Truefalsestudentsarea";

const Truefalsehelparea = () => {

    return (
        <>
            {/* start mcq help Area */}
            <div className="rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-start mb--20">
                                <h3 className="title">Who Is True/False Help For?</h3>
                            </div>
                            <p>
                                Every student will encounter multiple-choice questions (True/False) at some
                                point in their academic careers. Students often get stumped with
                                their multiple-choice question because they are unable to determine
                                which of the available options or answers is correct. If you can
                                identify with the issues described here, our True/False assistance service
                                was made just for you. Many challenges confront students when they
                                are enrolled in high school, college, or other educational
                                institutions. Because of these challenges, their academic life is
                                more difficult. DoubtQ provides an online True/False assistance service for
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
                                    don’t understand your True/False questions
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> Don’t
                                    have enough time to solve each True/False question
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" /> You
                                    are lagging behind your classmates in True/False type question.
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
            <Truefalsestudentsarea/>
        </>

    )
}

export default Truefalsehelparea;
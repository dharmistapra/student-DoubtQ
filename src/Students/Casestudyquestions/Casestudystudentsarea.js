import React from "react";
import { Link } from "react-router-dom";
import Casestudybonusarea from "./Casestudybonusarea";

const Casestudystudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Case Study Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    Action Shoes Ltd.'s Production Manager ran two shifts each day to meet the monthly
                                    quota of 50,000 units. Staff members get overtime pay for their efforts. Employees
                                    tend to take it easy during regular working hours in order to maximize their overtime pay.
                                    Despite the fact that the manager was able to create 5,000 units, doing so came with a larger
                                    price tag.
                                    <br />
                                    <br />
                                    a. From your perspective, what are some of management's shortcomings?
                                    <br />
                                    <br />
                                    b. Figure out what the production manager and the rest of the company's
                                    workers are lacking in terms of values.
                                </h6>
                                <h5 className="mt--20 color-secondary">Answer</h5>
                                <h6 className="">
                                    (a) Efficiency
                                </h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    (a) Efficiency...
                                    <div className="collapse" id="collapseExample">
                                        <h6 className="mt-2">
                                            Organizational values that are lacking in the production manager:
                                            <ul className="plan-offer-list mt--20 mb-2">
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Maximum efficiency in use of limited means
                                                </li>
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Truthful Administration
                                                </li>
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Sincerity
                                                </li>
                                            </ul>
                                            Organizational values not shared by staff:
                                            <ul className="plan-offer-list mt--20 mb-2">
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Sincerity
                                                </li>
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Self-direction
                                                </li>
                                                <li>
                                                    <i className="theme-gradient feather-arrow-right-circle" />
                                                    Dedication to the goal
                                                </li>
                                            </ul>
                                        </h6>
                                    </div>
                                </h6>
                                <Link to="#collapseExample"
                                    className="rbt-btn-link"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >
                                    Read More <i className="feather-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End for students Area */}
            <Casestudybonusarea />
        </>

    )
}

export default Casestudystudentsarea;
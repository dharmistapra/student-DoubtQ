import React from "react";
import { Link } from "react-router-dom";
import Fillupsbonusarea from "./Fillupsbonusarea";

const Fillupsstudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Fill In The Blanks Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    Many species of animals have been crucial to human survival at
                                    various points throughout time. Today, scientific study is striving
                                    to ______ the good advantages of living with companion animals.
                                </h6>
                                <div className="row">
                                    {/* <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            True
                                        </h5>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            False
                                        </h5>
                                    </div> */}
                                    {/* <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            C - 1.5
                                        </h5>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            D - 8
                                        </h5>
                                    </div> */}
                                </div>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">Discover</h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    Many species of animals have been crucial to human survival at
                                    various points throughout time. Today, scientific study is striving
                                    to DISCOVER the good advantages of living with companion animals....
                                    <div className="collapse" id="collapseExample">
                                        Since the 'to' preposition is always preceded by the First Form of
                                        the Verb, the correct answer is 'find. Theorized and Discover are the
                                        sole verbs in the list of options. And, we choose Discover out of the two
                                        since it is in Verb’s base form; nonetheless, Theorized is the second form.
                                    </div>
                                </h6>
                                <Link to="#collapseExample"
                                    className="rbt-btn-link"
                                    data-bs-toggle="collapse"
                                    //role="button"
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
            <Fillupsbonusarea />
        </>

    )
}

export default Fillupsstudentsarea;
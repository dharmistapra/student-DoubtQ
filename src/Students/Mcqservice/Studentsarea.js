import React from "react";
import { Link } from "react-router-dom";
import Mcqbonusarea from "./Mcqbonusarea";

const Studentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Mcq Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    In the equation{"{"}\displaystyle 2x+3=4{"}"}, solve for x.
                                </h6>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            A - 10
                                        </h5>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            B - 0.5
                                        </h5>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            C - 1.5
                                        </h5>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5 className="color-primary rbt-border pr--10 pt--10 pb--10 pl--10 radius-10 text-center">
                                            D - 8
                                        </h5>
                                    </div>
                                </div>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">Option B - 0.5</h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    Firstly, Shift +3 to RHS...
                                    <div className="collapse" id="collapseExample">
                                        Despite the apparent rise in the demand for the finest Issue
                                        help websites among college students, the answer to this
                                        question is controversial among both professors and their
                                        pupils. Many students find Question helpers useful, although not
                                        all educators agree with this assessment. The majority of
                                        students (56%) say that they are stressed out by their
                                        questions, and these students need the greatest online Question
                                        assistance to have questions answered in all areas. As a result
                                        of the epidemic, the number of people requiring aid has
                                        skyrocketed to an all-time high. It happens because of a
                                        disparity in education. In this article, we will analyze the
                                        factors that have led to the meteoric growth in popularity of
                                        question assistance services, as well as provide a glance into
                                        the kinds of services they provide.
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
            <Mcqbonusarea/>
        </>

    )
}

export default Studentsarea;
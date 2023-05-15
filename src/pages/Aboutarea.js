import React from "react";
import { Link } from "react-router-dom";


const Aboutarea = () => {

    return (

        <>
            {/* Start About Area  */}
            <div className="rbt-about-area bg-color-light rbt-section-gapTop pt--80 pb--80">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img src="/images/about/map.svg" alt="indianmap" />
                        </div>
                        <div className="col-lg-6">
                            <div className="inner pl--50 pl_sm--0 pl_md--0">
                                <div className="section-title text-start">
                                    <h3 className="title">
                                        {" "}
                                        DoubtQ Question Help <br />
                                        <span className="theme-gradient">Shaping the Future</span>{" "}
                                        Worldwide
                                    </h3>
                                    <h5 className="description mt--10">
                                        Start learning by registering for free
                                    </h5>
                                </div>
                                <p className="description mt--15">
                                    Our Question aid service is consistently ranked as one of the most
                                    sought-after offerings on a global scale. Up to this point, we
                                    have offered more than 500,000 different options. Our instructors
                                    clear up any confusion students may have about Homework and help
                                    them have a firmer grip on the material. More than one hundred
                                    thousand students from states such as Gujarat, Maharashtra, and
                                    Rajasthan, as well as students from other states, have placed
                                    their confidence in DoubtQ for superior Question Help Service.
                                </p>
                                <div className="about-btn mt--40">
                                    <Link
                                        className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                        to="/signup"
                                    >
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Do My Questions</span>
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
            {/* End About Area  */}
            <div className="footer-about pt--50 pb--50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description">Is Question Help High in Demand?</h5>
                            </div>
                            <p className="description mt--15">
                                Despite the apparent rise in the demand for the finest Issue help
                                websites among college students, the answer to this question is
                                controversial among both professors and their pupils. Many students
                                find Question helpers useful, although not all educators agree with
                                this assessment. The majority of students (56%) say that they are
                                stressed out by their questions, and these students need the
                                greatest online Question assistance to have questions answered in
                                all areas. As a result of the epidemic, the number of people
                                requiring aid has skyrocketed to an all-time high. It happens
                                because of a disparity in education. In this article, we will
                                analyze the factors that have led to the meteoric growth in
                                popularity of question assistance services, as well as provide a
                                glance into the kinds of services they provide.
                            </p>
                            <div className="collapse" id="collapseExample">
                                <p className="description">
                                    Despite the apparent rise in the demand for the finest Issue help
                                    websites among college students, the answer to this question is
                                    controversial among both professors and their pupils. Many
                                    students find Question helpers useful, although not all educators
                                    agree with this assessment. The majority of students (56%) say
                                    that they are stressed out by their questions, and these students
                                    need the greatest online Question assistance to have questions
                                    answered in all areas. As a result of the epidemic, the number of
                                    people requiring aid has skyrocketed to an all-time high. It
                                    happens because of a disparity in education. In this article, we
                                    will analyze the factors that have led to the meteoric growth in
                                    popularity of question assistance services, as well as provide a
                                    glance into the kinds of services they provide.
                                </p>
                            </div>
                            <div className="about-btn mt--25">
                                <Link
                                    className="rbt-btn btn-border btn-sm"
                                    data-bs-toggle="collapse"
                                    to="#collapseExample"
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
        </>

    )
}

export default Aboutarea;
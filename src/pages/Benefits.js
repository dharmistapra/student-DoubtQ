import React from "react";
import { Link } from "react-router-dom";

const Benefits = () => {


    return (

        <>
            {/* Start Benefits Area */}
            <div className="home_Benefits rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Multiple Benefits of DoubtQ Question Help</h3>
                                <p className="description">
                                    create a healthy platform that helps students to launch into the
                                    sky of success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit01.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Answers in 15 Minutes</h5>
                                        <p className="description mb--20">
                                            Don’t waste time searching for answers or waiting for your
                                            teacher to email back.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit02.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Chat with Tutors Instantly</h5>
                                        <p className="description mb--20">
                                            Get all your questions answered. Chat with tutors instantly
                                            and ask any follow-up questions you have.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit03.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Affordable for Students</h5>
                                        <p className="description mb--20">
                                            Priced right for students with the most affordable mobile
                                            tutors. For $ 3 / per Question, get 24/7 access to expert
                                            tutors.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit04.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Unlimited Expert Q&amp;A</h5>
                                        <p className="description mb--20">
                                            There are no monthly question limits with DoubtQ. Our massive
                                            tutor network, with 40,000+ subject matter experts, are always
                                            available to help you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit05.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Confidentiality</h5>
                                        <p className="description mb--20">
                                            We guarantee the safety of your information from any third
                                            party miscreants.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-cat-box rbt-cat-box-1 text-center">
                                <div className="inner">
                                    <div className="mb--15">
                                        <img
                                            src="/images/icons/benefit06.svg"
                                            alt="Icons Images"
                                        />
                                    </div>
                                    <div className="content">
                                        <h5 className="title mb--5">Accurate solutions</h5>
                                        <p className="description mb--20">
                                            Get 100% Accurate solutions in 25+ subjects to boost your GPA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Benefits Area */}
            <div className="home_become_an_expert pt--0 pb--90">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <img src="/images/banner/become_an_expert.png" alt="img"/>
                        </div>
                        <div className="col-lg-4 col-md-5 offset-md-1 mt_sm--20 text-center text-lg-start">
                            <div className="section-title">
                                <h3 className="title">Become an Expert</h3>
                                <h5 className="normal-text mb--20">
                                    Work anywhere, anytime and <br /> Earn upto <b>$1000</b> per month{" "}
                                </h5>
                            </div>
                            <Link
                                className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                to="/signup"
                            >
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">Start Earning</span>
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
        </>

    )
}

export default Benefits;
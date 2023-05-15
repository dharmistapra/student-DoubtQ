import React from "react";
import { Link } from "react-router-dom";
import Shortanswerbonusarea from "./Shortanswerbonusarea";

const Shortanswerstudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Short Answer Questions Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    Who invented Newton’s law?
                                </h6>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">
                                    Sir Issac Newton
                                </h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    Sir Isaac Newton contributed to the fields of mathematics and physics in a wide variety of ways....
                                    <div className="collapse" id="collapseExample">
                                        In 1666, when he was just 23 years old, he created the ideas that are now known as gravity.
                                        In the work entitled "Principia Mathematical Philosophizes Naturalism," which he published
                                        in 1686, he outlined his three principles of motion. Newton's discovery of the three laws
                                        of motion was a game-changer in the field of science.
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
            <Shortanswerbonusarea />
        </>

    )
}

export default Shortanswerstudentsarea;
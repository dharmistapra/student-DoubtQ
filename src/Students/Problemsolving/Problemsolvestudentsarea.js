import React from "react";
import { Link } from "react-router-dom";
import Problemsolvebonusarea from "./Problemsolvebonusarea";

const Problemsolvestudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Pratical Based Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    Prove that the sequence 2, 5, 8, 11, 14, 17, …. can never have a square number.
                                </h6>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">
                                    Given, 2, 5, 8, 11, 14, 17,
                                </h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    Given, 2, 5, 8, 11, 14, 17....
                                    <div className="collapse" id="collapseExample">
                                        This is an AP with the first term a = 2 and common difference d = 5 – 2 = 3.
                                        nth term of the given sequence is:
                                        <p className="mt-4">
                                            an = a + (n – 1) × d <br />
                                            an = 5 + (n – 1) × 3 <br />
                                            = 5 + 3n – 3         <br />
                                            = 3n + 2             <br />
                                            ∴ an = 3n + 2        <br />
                                            Let p be a natural number, such that p2 = an <br />
                                            p2 = 3n + 2 <br />
                                            3n = p2 – 2 <br />
                                            n = (p2 – 2)/3 <br />
                                            For any integer from 0 to 9 for p, n does not appear to be an integer. <br />
                                            Hence, the given sequence contains no perfect squares.
                                        </p>
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
            <Problemsolvebonusarea />
        </>

    )
}

export default Problemsolvestudentsarea;
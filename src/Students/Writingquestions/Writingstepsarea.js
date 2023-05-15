import React from "react";
// import { Link } from "react-router-dom";
import Writinghelparea from "./Writinghelparea";

const Writingstepsarea = () => {

    return (
        <>
            {/* Start Steps Area */}
            <div className="bg-color-light rbt-section-gap pb--0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Complete Writing Help in 4 Steps</h3>
                                <p className="description">It’s THAT Simple.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 d-flex align-items-center border-end">
                                        <h2 className="d-inline mb--0 mr--20">
                                            <span className="theme-gradient">01</span>
                                            <img
                                                className="mx-auto d-block"
                                                src="/images/icons/down_arrow.svg"
                                                alt="img"
                                            />
                                        </h2>
                                        <h5 className="d-inline mb--0 ">Sign up</h5>
                                    </div>
                                    <div className="col-lg-6 pl--20">
                                        <p>
                                            Fill in your details at DoubtQ register to complete the
                                            sign-up process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 d-flex align-items-center border-end">
                                        <h2 className="d-inline mb--0 mr--20">
                                            <span className="theme-gradient">02</span>
                                            <img
                                                className="mx-auto d-block"
                                                src="/images/icons/down_arrow.svg"
                                                alt="img"
                                            />
                                        </h2>
                                        <h5 className="d-inline mb--0 ">Place your Writing Question</h5>
                                    </div>
                                    <div className="col-lg-6 pl--20">
                                        <p>
                                            On the dashboard, place your desired Writing Question and upload
                                            your queries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 d-flex align-items-center border-end">
                                        <h2 className="d-inline mb--0 mr--20">
                                            <span className="theme-gradient">03</span>
                                            <img
                                                className="mx-auto d-block"
                                                src="/images/icons/down_arrow.svg"
                                                alt="img"
                                            />
                                        </h2>
                                        <h5 className="d-inline mb--0 ">Make Payment</h5>
                                    </div>
                                    <div className="col-lg-6 pl--20">
                                        <p>
                                            Depending on your Question Type, you will get price of that
                                            Question and Submit it.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 d-flex align-items-center border-end">
                                        <h2 className="d-inline mb--0 mr--20">
                                            <span className="theme-gradient">04</span>
                                            <img
                                                className="mx-auto d-block"
                                                src="/images/icons/down_arrow.svg"
                                                alt="img"
                                            />
                                        </h2>
                                        <h5 className="d-inline mb--0 ">Get Solution</h5>
                                    </div>
                                    <div className="col-lg-6 pl--20">
                                        <p>
                                            Once payment is done, you will get Your Writing Question answer
                                            done before mentioned deadline.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img src="/images/banner/4steps.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Steps Area */}
            <Writinghelparea/>
        </>

    )
}

export default Writingstepsarea;
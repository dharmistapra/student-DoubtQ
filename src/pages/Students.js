import React from "react";


const Students = () => {


    return (

        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 text-center">
                            <div className="section-title text-center mb--20">
                                <p className="description mb--0">Redeemable Voucher Criteria</p>
                                <h3 className="title">For Students</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb--20">
                                    <div className="bg-color-white shadow-1 radius-10">
                                        <h6 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                            After <span className="theme-gradient">50 Question</span>{" "}
                                            <br />
                                            Posted (Streak)
                                        </h6>
                                        <div className="bg-color-lightblue student-price">
                                            <i className="feather-arrow-right-circle" /> $ 5.00
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-color-white shadow-1 radius-10">
                                        <h6 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                            After <span className="theme-gradient">100 Question</span>{" "}
                                            <br />
                                            Posted (Streak)
                                        </h6>
                                        <div className="bg-color-lightblue student-price">
                                            <i className="feather-arrow-right-circle" /> $ 10.00
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-color-white shadow-1 radius-10">
                                        <h6 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                            After <span className="theme-gradient">150 Question</span>{" "}
                                            <br />
                                            Posted (Streak)
                                        </h6>
                                        <div className="bg-color-lightblue student-price">
                                            <i className="feather-arrow-right-circle" /> $ 15.00
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-color-white shadow-1 radius-10">
                                        <h6 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                            After <span className="theme-gradient">200 Question</span>{" "}
                                            <br />
                                            Posted (Streak)
                                        </h6>
                                        <div className="bg-color-lightblue student-price">
                                            <i className="feather-arrow-right-circle" /> $ 20.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="section-title text-center mb--20">
                                <p className="description mb--0">Refer to Friend</p>
                                <h3 className="title">For Students</h3>
                            </div>
                            <div className="bg-color-white shadow-1 radius-10 mb--20">
                                <h5 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                    <i className="feather-arrow-right-circle" /> FRIEND‘S DEPOSIT
                                </h5>
                                <div className="bg-color-lightviolet student-price">
                                    For 1<sup>st</sup> Time (only one time)
                                </div>
                            </div>
                            <div className="bg-color-white shadow-1 radius-10 mb--20">
                                <h5 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                    <i className="feather-arrow-right-circle" /> YOU GET
                                </h5>
                                <div className="bg-color-lightblue student-price">
                                    $ 30 on Every Friend you refer, <br />
                                    he/she deposit more than $ 100
                                </div>
                            </div>
                            <div className="bg-color-white shadow-1 radius-10 mb--20">
                                <h5 className="pr--20 pl--20 pt--15 pb--15 mb--0">
                                    <i className="feather-arrow-right-circle" /> FRIEND WILL GET
                                </h5>
                                <div className="bg-color-lightviolet student-price">
                                    $ 15 On He/She Type refer code{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End for students Area */}
        </>

    )
}

export default Students;
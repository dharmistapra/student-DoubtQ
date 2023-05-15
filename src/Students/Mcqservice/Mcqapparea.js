import React from "react";
// import { Link } from "react-router-dom";
import Mcqaboutarea from "./Mcqaboutarea";

const Mcqapparea = () => {

    return (
        <>
            {/* Start App Area */}
            <div className="bg_image bg_image--1 app-w position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 order-lg-2 mb_sm--40">
                            <div className="app-screen">
                                <img src="/images/banner/app.png" alt="DoubtQ_app" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 pl--100 pl_sm--0 order-lg-1 text-center text-lg-start">
                            <h3 className="color-white">Download DoubtQ App Now!</h3>
                            <h6 className="color-white mb--15">
                                Get instant help, 100% accurate &amp; <br />
                                personalized solutions in your pocket!
                            </h6>
                            <div className="row mt--20">
                                <div className="col-lg-3">
                                    <h6 className="color-white">More ways to get app</h6>
                                    <img
                                        className="mb--5"
                                        src="/images/icons/google_play.svg"
                                        alt="Google Play"
                                    />
                                    <img src="/images/icons/app_store.svg" alt="App Store" />
                                </div>
                                <div className="col-lg-3 mt_sm--20">
                                    <img src="/images/banner/qr_code.jpg" alt="QR Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End App Area */}
            <Mcqaboutarea/>
        </>

    )
}

export default Mcqapparea;
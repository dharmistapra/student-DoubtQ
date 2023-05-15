import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Coursearea from "./Coursearea";
import Odometer from 'react-odometerjs';

const Services = () => {

    //Odometer
    const [odometerValue, setOdometerValue] = useState(0);
    const [odometerValue1, setOdometerValue1] = useState(0);
    const [odometerValue2, setOdometerValue2] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOdometerValue(45);
            setOdometerValue1(4);
            setOdometerValue2(82);
        }, 1500);
    }, []);

    return (
        <>
            {/* Start Banner Area */}
            <div className="rbt-banner-area rbt-banner-2">
                <div className="container pb--120 pt--120">
                    <div className="row">
                        <div className="col-lg-12 text-center mb--50">
                            <h2 className="mb--0">
                                DoubtQ at your <span className="theme-gradient">Services</span>
                            </h2>
                            <p>All help you need, whenever you need is right here!</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* Start Single Counter  */}
                        <div className="col-md-4 col-sm-auto col-4">
                            <div className="inner d-md-flex align-items-center justify-content-center">
                                <div className="rbt-round-icon">
                                    <img src="/images/icons/tutors.svg" alt="Icons Images" />
                                </div>
                                <div className="counter-text">
                                    <h3 className="counter mb--0">
                                        <span className="odometer" data-count={45}>
                                            <Odometer
                                                value={odometerValue}
                                                format="(,ddd)"
                                                theme="default"
                                            />
                                        </span>
                                        <span className="count-text">K+</span>
                                    </h3>
                                    <span className="subtitle">Tutors</span>
                                </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}
                        {/* Start Single Counter  */}
                        <div className="col-md-4 col-sm-auto col-4">
                            <div className="inner d-md-flex align-items-center justify-content-center">
                                <div className="rbt-round-icon">
                                    <img src="/images/icons/students.svg" alt="Icons Images" />
                                </div>
                                <div className="counter-text">
                                    <h3 className="counter mb--0">
                                        <span className="odometer" data-count={4}>
                                            <Odometer
                                                value={odometerValue1}
                                                format="(,ddd)"
                                                theme="default"
                                            />
                                        </span>
                                        <span className="count-text">M+</span>
                                    </h3>
                                    <span className="subtitle">Students</span>
                                </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}
                        {/* Start Single Counter  */}
                        <div className="col-md-4 col-sm-auto col-4">
                            <div className="inner d-md-flex align-items-center justify-content-center">
                                <div className="rbt-round-icon">
                                    <img src="/images/icons/questions.svg" alt="Icons Images" />
                                </div>
                                <div className="counter-text">
                                    <h3 className="counter mb--0">
                                        <span className="odometer" data-count={82}>
                                            <Odometer
                                                value={odometerValue2}
                                                format="(,ddd)"
                                                theme="default"
                                            />
                                        </span>
                                        <span className="count-text">M+</span>
                                    </h3>
                                    <span className="subtitle">Questions Solved</span>
                                </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}
                    </div>
                </div>
            </div>
            {/* End Banner Area */}
            <Coursearea />
        </>

    )
}

export default Services;
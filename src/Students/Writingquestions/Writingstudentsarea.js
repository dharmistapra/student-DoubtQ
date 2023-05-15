import React from "react";
import { Link } from "react-router-dom";
import Writingbonusarea from "./Writingbonusarea";

const Writingstudentsarea = () => {

    return (
        <>
            {/* Start for students Area */}
            <div className="bg-color-light rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Example As Well As Sample Of or Students</h3>
                                <p className="description">Writing Type Questions</p>
                            </div>
                        </div>
                        <div className="col-lg-8 mx-auto bg-color-white shadow-1 radius-10">
                            <div className="pt--30 pb--30 pl--20 pr--20">
                                <h5 className="color-secondary">Question</h5>
                                <h6 className="mb--10">
                                    Write an Essay on Artificial Intelligence (AI)
                                </h6>
                                <h5 className="mt--10 color-secondary">Answer</h5>
                                <h6 className="">
                                    Machines that can mimic human intellect are examples of AI. To put it in
                                    perspective, compare this to the innate intelligence shown by humans and other
                                    animals. Machines are able to learn, make plans, reason, and solve problems thanks
                                    to Artificial Intelligence.
                                </h6>
                                <h5 className="mt--20 color-secondary">Explanation</h5>
                                <h6 className="">
                                    Machines that can mimic human intellect are examples of AI. To put it in perspective,
                                    compare this to the innate intelligence shown by humans and other animals. Machines are
                                    able to learn, make plans, reason, and solve problems thanks to Artificial Intelligence. ...
                                    <div className="collapse mt-4" id="collapseExample">
                                        Most importantly, AI is the study and development of computer systems capable of mimicking
                                        human intellect. In terms of global technological and innovative growth, it is perhaps the
                                        most rapid. In addition, many professionals think that AI has the potential to resolve very
                                        difficult and urgent problems. As a first point, AI has several applications in the medical
                                        field. Technology firms are actively working to develop diagnostic tools capable of providing
                                        timely results. Without the need for surgeons, artificial intelligence may effectively perform
                                        surgeries on patients. There have already been procedures with such cutting-edge technology.
                                        IBM Watson is another great piece of healthcare technology.
                                        <p className="mt-4">
                                            In the corporate world, using AI would reduce labor and save a lot of time. Robotic automation is.
                                            being applied to human business processes. Machine learning algorithms also aid in providing
                                            superior support to clients. With a chat bots, clients may get instantaneous responses and support.
                                            The use of AI in the classroom has the potential to greatly increase productivity. Discovering
                                            student requirements is now possible using AI technologies. Then it might change to suit their
                                            requirements. Using AI, tutors may assist students with their coursework. The time spent grading
                                            may also be greatly reduced because to the automation made possible by AI.
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
            <Writingbonusarea />
        </>

    )
}

export default Writingstudentsarea;
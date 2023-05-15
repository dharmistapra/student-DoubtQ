import React from "react";
import { Link } from "react-router-dom";


const Faq = () => {
    return (

        <>
            <main className="rbt-main-wrapper">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">FAQs</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Faqs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="rbt-accordion-style accordion">
                                    <div className="section-title text-start mb--30">
                                        <h4 className="title">Purchases &amp; Refunds</h4>
                                    </div>
                                    <div className="rbt-accordion-style rbt-accordion-04 accordion">
                                        <div className="accordion" id="accordionExamplec3">
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree1"
                                                >
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree1"
                                                        aria-expanded="true"
                                                        aria-controls="collapseThree1"
                                                    >
                                                        What is Histudy ? How does it work?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree1"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="headingThree1"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        You can run Histudy easily. Any School, University,
                                                        College can be use this histudy education template for
                                                        their educational purpose. A university can be run their
                                                        online leaning management system by histudy education
                                                        template.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree2"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree2"
                                                    >
                                                        How can I get the customer support?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree2"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree2"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        After purchasing the product need you any support you can
                                                        be share with us with sending mail to
                                                        rainbowit10@gmail.com.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree3"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree3"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree3"
                                                    >
                                                        Can I get update regularly and For how long do I get
                                                        updates?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree3"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree3"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        Yes, We will get update the Histudy. And you can get it
                                                        any time. Next time we will comes with more feature. You
                                                        can be get update for unlimited times. Our dedicated team
                                                        works for update.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree4"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree4"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree4"
                                                    >
                                                        15 Things To Know About Education?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree4"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree4"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        If you're looking for random paragraphs, you've come to
                                                        the right place. When a random word or a random sentence
                                                        isn't quite enough, the next logical step is to find a
                                                        random paragraph.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Faq;
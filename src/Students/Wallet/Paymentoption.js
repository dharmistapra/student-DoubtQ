import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Paymentoption = () => {

    const referTofrnd = useSelector((state) => state.referTofrnd);

    let tokens = localStorage.getItem("token");
    const dispatch = useDispatch();
    
    return (
        <main className="rbt-main-wrapper">
            <div className="blue-title">
                <div className="container">
                    <h5 className="color-white pt--20 pb--20 mb--0">
                        <i className="feather-user" />{" "}
                        <span className="normal-text">Hello,</span> {referTofrnd.user && referTofrnd.user.info.name}
                    </h5>
                </div>
            </div>
            <div className="dashboard pt--20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Start Dashboard Top  */}
                            {/* End Dashboard Top  */}
                            <div className="row g-5">
                                <div className="col-lg-3">
                                    {/* Start Dashboard Sidebar  */}
                                    <div className="sticky-top mb--30">
                                        <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                                            <div className="inner">
                                                <div className="content-item-content">
                                                    <div className="rbt-default-sidebar-wrapper">
                                                        <div className="section-title mb--20">
                                                            <h6 className="rbt-title-style-2">
                                                                <img src="/images/icons/wallet.svg" alt="" />
                                                                Wallet
                                                            </h6>
                                                        </div>
                                                        <nav className="mainmenu-nav">
                                                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                <li>
                                                                    <Link to="#" className="active">
                                                                        <i className="feather-arrow-right" />
                                                                        <span>Total Amount</span>
                                                                    </Link>{" "}
                                                                    <small className="badge color-body">12</small>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">
                                                                        <i className="feather-arrow-right" />
                                                                        <span>Transaction History</span>
                                                                    </Link>{" "}
                                                                    <small className="badge color-body">09</small>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Dashboard Sidebar  */}
                                </div>
                                <div className="col-lg-9">
                                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                                        <div className="content">
                                            <div className="row g-5">
                                                <div className="col-lg-10">
                                                    <div className="section-title mb--10">
                                                        <h4 className="mb--0">Payment Option</h4>
                                                    </div>
                                                    <div className="payent">
                                                        <div className="rbt-form-check show-block">
                                                            <input
                                                                id="rbt-radio-1"
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment"
                                                                defaultValue="PayPal"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="rbt-radio-1"
                                                            >
                                                                PayPal
                                                            </label>
                                                            <div className="pl--80 d-inline-block">
                                                                <img src="/images/icons/pay_pal.png" alt="img" />
                                                            </div>
                                                        </div>
                                                        <div className="hide option-block">
                                                            <div className="rbt-form-group mt--10">
                                                                <input
                                                                    placeholder="Enter your PayPal email id"
                                                                    type="email"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payent">
                                                        <div className="rbt-form-check show-block">
                                                            <input
                                                                id="rbt-radio-2"
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment"
                                                                defaultValue="BankTransfer"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="rbt-radio-2"
                                                            >
                                                                Bank Transfer
                                                            </label>
                                                        </div>
                                                        <div className="hide option-block">
                                                            <div className="row mt--10">
                                                                <div className="col-lg-6">
                                                                    <div className="rbt-form-group">
                                                                        <input placeholder="Account No." type="email" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="rbt-form-group">
                                                                        <input placeholder="IFSC Code" type="email" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payent">
                                                        <div className="rbt-form-check show-block">
                                                            <input
                                                                id="rbt-radio-3"
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment"
                                                                defaultValue="Creditcards"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="rbt-radio-3"
                                                            >
                                                                Credit cards
                                                            </label>
                                                            <div className="pl--80 pl_sm--0 pt_sm--20 d-inline-block">
                                                                <img src="/images/icons/credit_cards.png" alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payent">
                                                        <div className="rbt-form-check show-block">
                                                            <input
                                                                id="rbt-radio-4"
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="payment"
                                                                defaultValue="Debitcards"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="rbt-radio-4"
                                                            >
                                                                Debit cards
                                                            </label>
                                                            <div className="pl--80 pl_sm--0 pt_sm--20 d-inline-block">
                                                                <img src="/images/icons/debit_cards.png" alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt--20">
                                                        <Link
                                                            className="rbt-btn btn-gradient hover-icon-reverse btn-sm w-100"
                                                            to="#"
                                                        >
                                                            <span className="icon-reverse-wrapper">
                                                                <span className="btn-text">Pay Now</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Paymentoption;
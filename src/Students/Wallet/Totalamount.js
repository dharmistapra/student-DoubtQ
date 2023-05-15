import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { addPrice, walletApi } from "../../Redux/TotalAmountslice";
import PulseLoader from "react-spinners/PulseLoader";
import { applyCouponCodeApi } from "../../Redux/couponcodeSlice";
import { useForm } from "react-hook-form";

const Totalamount = () => {
    //btn-active
    useEffect(() => {
        var selector = ".add-money";
        $(selector).on("click", function () {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });
    });

    //totalamount
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [showComponent, setShowComponent] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [loader, setLoader] = useState(true);
    const [isFilledUp, setISFilledUp] = useState(false);
    const jsonData = [
        { id: 1, price: 5 },
        { id: 2, price: 10 },
        { id: 3, price: 15 },
        { id: 4, price: 20 },
        { id: 5, price: 50 },
        { id: 6, price: 100 },
        { id: 7, price: 150 },
        { id: 8, price: 200 },
        { id: 9, price: 250 },
    ];
    const navigate = useNavigate();
    const data = useSelector((state) => state.data);
    const couponcode = useSelector((state) => state.couponcode);

    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const { bonus, price, total } = useSelector((state) => state.data);
    const success = useSelector((state) => state.data.success);
    const [discount, setDiscount] = useState([]);

    const referTofrnd = useSelector((state) => state.referTofrnd);
    const dispatch = useDispatch();

    let tokens = localStorage.getItem("token");

    useEffect(() => {
        wallet();
    }, []);

    const wallet = async () => {
        setLoader(true);
        // let tokens = localStorage.getItem("token")
        await dispatch(walletApi(tokens));
        setLoader(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");
            setCouponCode(data.couponCode);
            const walletDataObj = {
                token: token,
                couponCode: data.couponCode,
            };
            setISFilledUp(true);
            const response = await dispatch(applyCouponCodeApi(walletDataObj));
            setCouponCode(response);
        } catch (error) {
            navigate("/signin");
        }
    };
    //discoun count
    const discountAmount = couponcode.user && couponcode.user.document.discount;

    const discountPercentage = (price.slice(-1)[0] * discountAmount) / 100;

    // select price
    const handleClick = (price) => {
        setShowComponent(true);
        setSelectedPrice(price);
        dispatch(addPrice(price));
    };

    const discountTotal = total + discountPercentage;

    return (
        <>
            <main className="rbt-main-wrapper">
                <div className="my-5"></div>
                <div className="blue-title">
                    <div className="container">
                        <h5 className="color-white pt--20 pb--20 mb--0">
                            <i className="feather-user" />{" "}
                            <span className="normal-text">Hello,</span>{" "}
                            {referTofrnd.user && referTofrnd.user.info.name}
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
                                                                    <img
                                                                        src="/images/icons/wallet.svg"
                                                                        alt="img"
                                                                    />
                                                                    Wallet
                                                                </h6>
                                                            </div>
                                                            <nav className="mainmenu-nav">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                    <li>
                                                                        <Link to="/wallet" className="active">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>Total Amount</span>
                                                                        </Link>{" "}
                                                                        {/*<small className="badge color-body">12</small>*/}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/transactionhistory">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>Transaction History</span>
                                                                        </Link>{" "}
                                                                        {/*<small className="badge color-body">09</small>*/}
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
                                                    <div className="col-lg-6">
                                                        <div className="section-title mb--30">
                                                            <h6 className="mb--0">Total Amount</h6>
                                                            <h4 className="mb--0">
                                                                {loader === true ?
                                                                    <div className="loader" align="center">
                                                                        <PulseLoader color="#b02deb" />
                                                                    </div>
                                                                    :
                                                                    <b>
                                                                        ${" "}
                                                                        {data.user &&
                                                                            data.user.document.totalAmount}
                                                                    </b>
                                                                }
                                                            </h4>
                                                        </div>
                                                        <div className="row border-bottom mt--10 pb--10">
                                                            <div className="col-lg-8 col-8">
                                                                <h6>Available Amount</h6>
                                                            </div>
                                                            <div className="col-lg-4 col-4 text-end">
                                                                {loader === true ?
                                                                    <div className="loader" align="center">
                                                                        <PulseLoader color="#b02deb" />
                                                                    </div>
                                                                    :
                                                                    <h6>
                                                                        ${" "}
                                                                        {data.user &&
                                                                            data.user.document.availableAmount}
                                                                    </h6>
                                                                }
                                                            </div>
                                                        </div>

                                                        <div className="row border-bottom mt--10 pb--10">
                                                            <div className="col-lg-8 col-8">
                                                                <h6>Redeemable Amount</h6>
                                                            </div>
                                                            <div className="col-lg-4 col-4 text-end">
                                                                {loader === true ?
                                                                    <div className="loader" align="center">
                                                                        <PulseLoader color="#b02deb" />
                                                                    </div>
                                                                    :
                                                                    <h6>
                                                                        ${" "}
                                                                        {data.user &&
                                                                            data.user.document.redeemableAmount}
                                                                    </h6>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="home-offerbg mt--20">
                                                            <div className="offer-text text-center">
                                                                <h6 className="color-white mb--0">
                                                                    Additional 20% Bonus On Deposit Of $50 &amp;
                                                                    $250 *
                                                                </h6>
                                                            </div>
                                                        </div>

                                                        {showComponent && (
                                                            <>
                                                                <div className="bg-color-grey mt--20 p--10 rbt-radius">
                                                                    <div className="row border-bottom mt--10 pb--10">
                                                                        <div className="col-lg-8 col-8">
                                                                            <h6>Total Adding balance</h6>
                                                                        </div>
                                                                        <div className="col-lg-4 col-4 text-end">
                                                                            <h6>
                                                                                ${" "}
                                                                                {showComponent &&
                                                                                    price.length > 0 && (
                                                                                        <span> {price.slice(-1)[0]}</span>
                                                                                    )}
                                                                            </h6>
                                                                        </div>
                                                                    </div>

                                                                    {bonus ? (
                                                                        <div className="row border-bottom mt--10 pb--10">
                                                                            <div className="col-lg-8 col-8">
                                                                                <h6>
                                                                                    Additional 20% Bonus you will get{" "}
                                                                                </h6>
                                                                            </div>
                                                                            <div className="col-lg-4 col-4 text-end">
                                                                                <h6>+ ${bonus}</h6>
                                                                            </div>
                                                                        </div>
                                                                    ) : null}

                                                                    {couponcode.user &&
                                                                        couponcode.user.status === 1 ? (
                                                                        <div className="row border-bottom mt--10 pb--10">
                                                                            <div className="col-lg-8 col-8">
                                                                                <h6>
                                                                                    Additional coupn code you will get
                                                                                </h6>
                                                                            </div>
                                                                            <div className="col-lg-4 col-4 text-end">
                                                                                <h6>+ $ {discountPercentage}</h6>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        ""
                                                                    )}

                                                                    {success === true ? (
                                                                        <div className="row border-bottom mt--10 pb--10">
                                                                            <div className="col-lg-8 col-8">
                                                                                <h6>Total Amount you will get </h6>
                                                                            </div>
                                                                            <div className="col-lg-4 col-4 text-end">
                                                                                <h6> $ {discountTotal}</h6>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="row border-bottom mt--10 pb--10">
                                                                            <div className="col-lg-8 col-8">
                                                                                <h6>Total Amount you will get </h6>
                                                                            </div>
                                                                            <div className="col-lg-4 col-4 text-end">
                                                                                <h6> $ {discountTotal}</h6>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="mt--20">
                                                                    <Link
                                                                        className="rbt-btn btn-gradient hover-icon-reverse btn-sm w-100"
                                                                        to="#"
                                                                    >
                                                                        <span className="icon-reverse-wrapper">
                                                                            <span className="btn-text">
                                                                                Pay Now $ {price.slice(-1)[0]}
                                                                            </span>
                                                                            <span className="btn-icon">
                                                                                <i className="feather-arrow-right" />
                                                                            </span>
                                                                            <span className="btn-icon">
                                                                                <i className="feather-arrow-right" />
                                                                            </span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <h5>Add Money</h5>
                                                        <div className="row">
                                                            {jsonData.map((item) => {
                                                                return (
                                                                    <div
                                                                        className="col-lg-4 col-6"
                                                                        key={item.id}
                                                                    >
                                                                        <Link
                                                                            to="#"
                                                                            onClick={() => handleClick(item.price)}
                                                                            className={`add-money p--10 mb--10 d-block rbt-radius text-center ${item.price === 50 ||
                                                                                item.price === 250
                                                                                ? "highlight"
                                                                                : ""
                                                                                }`}
                                                                        >
                                                                            $ {item.price}
                                                                        </Link>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        <div className="mt--20">
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <h5>Coupon Code</h5>
                                                                <input
                                                                    placeholder="Enter Coupon Code"
                                                                    type="text"
                                                                    {...register("couponCode", {
                                                                        required: "Please Enter Your CouponCode",
                                                                    })}
                                                                />
                                                                <p className="text-danger">
                                                                    {errors.couponCode &&
                                                                        errors.couponCode.message}
                                                                </p>
                                                                <button
                                                                    className="rbt-btn btn-sm w-100 mt--10 text-center"
                                                                    type="submit"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={
                                                                        !showComponent &&
                                                                        !isFilledUp &&
                                                                        "#sorrypopup"
                                                                    }
                                                                >
                                                                    Apply
                                                                </button>
                                                                <div>
                                                                    <h5 className="text-danger my-4">
                                                                        {couponcode.isError &&
                                                                            couponcode.isError.error}
                                                                    </h5>

                                                                    {couponcode.isError === null &&
                                                                        showComponent &&
                                                                        selectedPrice &&
                                                                        couponcode.user &&
                                                                        couponcode.user.status === 1 && (
                                                                            <h5 className="text-success text-center my-4">
                                                                                Coupon applied successfully
                                                                            </h5>
                                                                        )}
                                                                </div>
                                                            </form>
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

            {/* Modal */}

            <div
                className="modal fade"
                id="sorrypopup"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="sorrypopup"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body text-capitalize">
                            <div className="text-center">
                                <i className="h1 feather-alert-triangle text-danger" />
                                <h4 className="mt--20 mb--20">Please Select Price</h4>
                                <h6 className="mb--20">
                                    after use Your couponCode
                                    <br />
                                </h6>
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="rbt-btn btn-sm mr--10"
                                        data-bs-dismiss="modal"
                                    >
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Totalamount;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { walletApi } from "../../Redux/TotalAmountslice";
import PulseLoader from "react-spinners/PulseLoader";

const Transactionhistory = () => {

    const [selectedDate, setSelectedDate] = useState("");
    const [loader, setLoader] = useState(true);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.data);

    const referTofrnd = useSelector((state) => state.referTofrnd);

    let tokens = localStorage.getItem("token");

    // Pagination state
    const [allWalletData, setAllWalletData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const ITEMS_PER_PAGE = 5;

    // Fetch wallet data on mount
    useEffect(() => {
        setLoader(true)
        // let tokens = localStorage.getItem("token");
        dispatch(walletApi(tokens));
        setLoader(false)
    }, []);

    // Update wallet data and pagination on data changes
    useEffect(() => {
        if (data.user) {
            const walletData = data.user.document.walletHistory;
            setAllWalletData(walletData);
            setTotalPages(Math.ceil(walletData.length / ITEMS_PER_PAGE));
            setPage(1);
        }
    }, [data]);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // update filtered wallet data when date is selected

    const filterWalletData = allWalletData.filter((item) => {
        return (
            !selectedDate ||
            new Date(item.date).toLocaleDateString() ===
            new Date(selectedDate).toLocaleDateString()
        );
    }); // add this line to filter by date

    // Get current page of wallet data

    const currentWalletData = filterWalletData.slice(startIndex, endIndex);

    // Handle page change
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

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
                                                                    <Link to="/wallet">
                                                                        <i className="feather-arrow-right" />
                                                                        <span>Total Amount</span>
                                                                    </Link>{" "}
                                                                    {/*<small className="badge color-body">12</small>*/}
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="/transactionhistory"
                                                                        className="active"
                                                                    >
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
                                                            $ {data.user && data.user.document.totalAmount}
                                                        </h4>
                                                    </div>
                                                    <div className="row border-bottom mt--10 pb--10">
                                                        <div className="col-lg-8 col-8">
                                                            <h6>Available Amount</h6>
                                                        </div>
                                                        <div className="col-lg-4 col-4 text-end">
                                                            $ {data.user && data.user.document.availableAmount}
                                                        </div>
                                                    </div>
                                                    <div className="row border-bottom mt--10 pb--10">
                                                        <div className="col-lg-8 col-8">
                                                            <h6>Redeemable Amount</h6>
                                                        </div>
                                                        <div className="col-lg-4 col-4 text-end">
                                                            {" "}
                                                            $ {data.user && data.user.document.redeemableAmount}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <h5 className="mt--30">Transaction History</h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <form className="mt--20">
                                                    <div className="rbt-form-group">
                                                        <input
                                                            type="date"
                                                            placeholder="Date"
                                                            id="date"
                                                            value={selectedDate}
                                                            onChange={(e) => setSelectedDate(e.target.value)}
                                                            format="YYYY-MM-DD"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--20">
                                                {loader === true ?
                                                    <div className="loader" align="center">
                                                        <PulseLoader color="#b02deb" />
                                                    </div>
                                                    :
                                                    <table className="rbt-table table table-borderless ">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Description</th>
                                                                <th>Date</th>
                                                                <th>Amount</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-sm">
                                                            {currentWalletData.length > 0 ? currentWalletData.map((item, _id) => {
                                                                return (
                                                                    <tr key={_id}>
                                                                        <th>{item.transactionId}</th>
                                                                        <td>{item.description}</td>
                                                                        <td>
                                                                            {new Date(item.date).toLocaleDateString()}
                                                                        </td>
                                                                        <td>$ {item.amount}</td>
                                                                        <td>
                                                                            <span className="rbt-badge-5 bg-color-success-opacity color-success">
                                                                                {item.status}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }) : <h4 className="text-center my-5">No result Found</h4>}
                                                        </tbody>
                                                    </table>
                                                }
                                            </div>
                                            <div className="col-lg-12">
                                                <nav>
                                                    <ul className="rbt-pagination justify-content-end">
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                aria-label="Previous"
                                                                onClick={handlePrevPage}
                                                            >
                                                                <i className="feather-chevron-left" />
                                                            </Link>
                                                        </li>

                                                        <li className="active">
                                                            <Link to="#">{page}</Link>
                                                        </li>

                                                        <li>
                                                            <Link
                                                                to="#"
                                                                aria-label="Next"
                                                                onClick={handleNextPage}
                                                            >
                                                                <i className="feather-chevron-right" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
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

    );
};

export default Transactionhistory;
